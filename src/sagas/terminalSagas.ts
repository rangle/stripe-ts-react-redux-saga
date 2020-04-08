import {put, call, takeLatest, select, takeEvery} from 'redux-saga/effects';
import { httpGet, httpPost } from "./services";
import { TOGGLE_USE_TERMINAL, toggleUseTerminalAction } from "../types/customerTypes";
import * as customerActions from "../Checkout/actions/customerActions";
import * as paymentActions from '../Checkout/actions/paymentActions';

import { customerSelector,
    getTerminalToken,
    getUseTerminalPreference
} from "../Checkout/selectors/customerSelector";
import {getClientSecret} from "../Checkout/selectors/paymentSelector";
import {PAYMENT_CONFIRM_STARTED, PaymentActionTypes} from "../types/paymentTypes";

declare let StripeTerminal: any;
let terminal: any;
let stripe: any;

type TerminalToken = {
    "object": string,
    "secret": string,
}

type terminalConnectResponse = {
    "success": boolean,
    "message": string,
    "terminalToken"?: TerminalToken
}

export const watchTerminalSaga = [
    takeLatest(TOGGLE_USE_TERMINAL, terminalConnect),
    takeEvery(PAYMENT_CONFIRM_STARTED, terminalCaptureCard),
];

function* terminalConnect(action: toggleUseTerminalAction) {
    console.log('Terminal Saga: toggleUseTerminalAction requested');
    const useTerminal = yield select(getUseTerminalPreference);
    console.log('useTerminal', useTerminal);

    if (useTerminal === false) return;
    const terminalToken = yield select(getTerminalToken);
    if (terminalToken !== undefined) return;
    console.log('terminalToken === undefined');

    try {
        terminal = StripeTerminal.create({
            onFetchConnectionToken: fetchConnectionToken,
            onUnexpectedReaderDisconnect: unexpectedDisconnect,
        });
        console.log('terminal', terminal);
        yield connectReaderHandler();

        console.log('reader connected!');

    }
    catch (error) {
        console.log('response.terminalToken.secret', error);
    }
}

async function fetchConnectionToken() {
    console.log('starting fetchConnectionToken');

    const url = 'terminal/connect';
    const { data } = await httpGet({ url });
    console.log('fetchConnectionToken result', data);

    await customerActions.terminalConnected(data.terminalToken.secret);
    return data.terminalToken.secret;
}

async function captureTerminalPayment(paymentIntentId: string) {
    const url = 'terminal/capture';
    const { data } = await httpPost({url, data: {pi_id: paymentIntentId}});
    console.log('captureTerminalPayment result', data);
    return data;
}

function* unexpectedDisconnect() {
    console.log('Terminal unexpectedly disconnected');
    return false;
}

function* terminalCaptureCard(action: PaymentActionTypes) {
    const useTerminal = yield select(getUseTerminalPreference);
    console.log('useTerminal', useTerminal);
    if (! useTerminal) return;
    console.log('Attempt to use Terminal to complete payment');

    const clientSecret = yield select(getClientSecret);
    console.log('ClientSecret', clientSecret);
    if (! clientSecret) return;

    /**
     * clientSecret is the client_secret from the PaymentIntent
     * This is the Card Tap -
     * @todo simulating the Terminal
     */
    const resultCollect = yield terminal.collectPaymentMethod(clientSecret);
    if (resultCollect.error) {
        console.log('FAILURE Payment Method not successful', resultCollect.error);
        return yield put(paymentActions.paymentConfirmFailedAction({error: resultCollect.error, status: undefined}));
    }
    console.log('SUCCESS Card captured', resultCollect);

    /**
     * paymentIntent is the entire object from Stripe
     * This is the Authorization on the Credit Card
     */
    const resultProcess = yield delayPaymentConfirmation(resultCollect.paymentIntent);
    console.log('resultProcess', resultProcess);
    if (resultProcess.error) {
        console.log('FAILURE Card capture unsuccessful', resultProcess.error);
        return yield put(paymentActions.paymentConfirmFailedAction({error: resultProcess.error, status: undefined}));
    }
    console.log('SUCCESS Card authorization Succeeded', resultProcess.paymentIntent.id);

    /**
     * paymentIntent.id is the ID from the PaymentIntent (not to be confused with client_secret)
     * This is the card tap
     */
    const resultCapture = yield captureTerminalPayment(resultProcess.paymentIntent.id);
    if (resultCapture.success === true) {
        console.log('SUCCESS Payment Complete', resultProcess.paymentIntent.id);
        return yield put(paymentActions.paymentConfirmSucceededAction(resultCapture.paymentIntent));
    }
    console.log('FAILURE Final Payment Step Failed to Capture', resultProcess.error);
    yield put(paymentActions.paymentConfirmFailedAction({error: resultProcess.error, status: undefined}));
}

const delayPaymentConfirmation = ( paymentIntent: any ) => new Promise(resolve => {
        console.log('begin delay before Auth');
        setTimeout( () => {
            console.log('about to resolve processPayment');
            resolve(terminal.processPayment( paymentIntent ));
        }, 100); // delay in MS
    });

function* connectReaderHandler() {
    /**
     * @todo: this is using the simulated card reader!!
     */
    const config = {simulated: true};

    const discoverResult = yield terminal.discoverReaders(config);
    if (discoverResult.error) {
        console.log('Failed to discover: ', discoverResult.error);
    } else if (discoverResult.discoveredReaders.length === 0) {
        console.log('No available readers.');
    } else {
        /*
         * @todo - Select the correct reader.
         */
        const selectedReader = discoverResult?.discoveredReaders[0];

        const connectResult = yield terminal.connectReader(selectedReader);
        if (connectResult.error) {
            console.log('Failed to connect: ', connectResult.error);
            return yield put(customerActions.terminalConnectFailed());
        }
        console.log('Connected to reader: ', connectResult.reader.label);

    }
}
