import React, {MouseEvent} from 'react';
import {injectStripe, ReactStripeElements} from 'react-stripe-elements';
import { useSelector, useDispatch } from "react-redux";

import {paymentConfirmStartedAction, paymentIntentStartedAction} from "./actions/paymentActions";
import {isCheckoutReadySelector} from "./selectors/paymentSelector";
import Customer from "./Customer";
import CreditCardSection from "./CreditCardSection";
import {select} from "redux-saga/effects";
import {getUseTerminalPreference} from "./selectors/customerSelector";
import TerminalButton from "./TerminalButton";

const CheckoutForm: React.ComponentType<ReactStripeElements.InjectedStripeProps> = ({ stripe, elements }) => {

    const dispatch = useDispatch();
    const isCheckoutReady = useSelector(isCheckoutReadySelector);
    const useTerminal = useSelector(getUseTerminalPreference);

    const SelectPayMethod: React.FC = () => {
        if (! isCheckoutReady) {
            return <button onClick={event => {event.preventDefault(); dispatch(paymentIntentStartedAction())}}>create PaymentIntent</button>
        }
        return (useTerminal) ? <TerminalButton />: <CreditCardSection />
    }

    const handleSubmit = (event: MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('form submit fired');
        dispatch(paymentConfirmStartedAction({stripe, elements}));
    };

    return <form onSubmit={handleSubmit}>
        <Customer />
        <SelectPayMethod />
    </form>
};

export default injectStripe(CheckoutForm);
