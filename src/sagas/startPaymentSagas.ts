import { put, call, select, takeEvery } from 'redux-saga/effects';
import { httpPost } from "./services";
import {
    PAYMENT_CONFIRM_STARTED,
    PAYMENT_INTENT_STARTED,
    PaymentActionTypes,
    PaymentIntent,
} from '../types/paymentTypes';
import * as actions from '../Checkout/actions/paymentActions';
import { getClientSecret } from "../Checkout/selectors/paymentSelector";
import {
    getBillingDetails,
    getCustomerId,
    getIsSaveCustomer,
    getUseTerminalPreference
} from "../Checkout/selectors/customerSelector";

export const watchPaymentSaga = [
     takeEvery(PAYMENT_INTENT_STARTED, startPayment),
     takeEvery(PAYMENT_CONFIRM_STARTED, confirmPayment),
];

/**
 * @todo - untangle this - create payment vs. confirm payment
 * @param action
 */
function* startPayment(action: PaymentActionTypes) {
    const useTerminal = yield select(getUseTerminalPreference);
    const customerId = yield select(getCustomerId);
    const billingDetails = yield select(getBillingDetails);
    const isSaveCustomer = yield select(getIsSaveCustomer);

    if (! customerId) {
        console.log('no customerId');
        return false;
    }
    try {
        const url = 'paymentIntent/startPayment';
        const data: PaymentIntent = {
            customerId: customerId,
            payment_method_types: ['card', 'card_present'],
            billing_details: billingDetails,
            saveCustomer: isSaveCustomer,
        };
        if (useTerminal === true) {
            data.capture_method = 'manual';
        }
        console.log('create paymentIntent: ', data);
        const result = yield call(httpPost, {url, data});
        console.log('paymentIntent: ', result.data.paymentIntent);
        if (result.data && result.data.paymentIntent){
            yield put(actions.paymentIntentUpdatedAction(result.data.paymentIntent));
            return;
        }
        if (result.error) {
            throw( new Error('create paymentIntent failed:' + JSON.stringify(result.error)));
        }
        throw( new Error('create paymentIntent failed for unknown reasons'));
    }
    catch(err) {
        const errorMessage = (err.message)
            ? err.message
            : 'An unknown error has occurred';
        yield put(actions.paymentIntentFailedAction({error: errorMessage, status: undefined}));
    }
}

function* confirmPayment(action: PaymentActionTypes) {
    const useTerminal = yield select(getUseTerminalPreference);
    console.log('useTerminal', useTerminal);
    if (useTerminal === true) return;
    console.log('Attempt to use Web based payment to complete payment');

    try {
        console.log('do Card-Not-Present pay');
        const clientSecret = yield select(getClientSecret);
        // const billingDetails = yield select(getBillingDetails);

        const result: any = yield action.payload.stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: action.payload.elements?.getElement('card'),
            },
        });
        console.log('confirmPayment result', result);
        if (result.error) {
            const error = result.error.message;
            yield put(actions.paymentConfirmFailedAction({error: error, status: undefined}));
            return;
        }
        yield put(actions.paymentConfirmSucceededAction(result.paymentIntent));
    }
    catch(err) {
        console.log('confirmPayment err', err);
        const errorMessage = (err.message)
            ? err.message
            : 'An unknown error has occurred';
        yield put(actions.paymentConfirmFailedAction({error: errorMessage, status: undefined}));
    }
}
