import {ReactStripeElements} from "react-stripe-elements";

export const PAYMENT_INTENT_STARTED = 'PAYMENT_INTENT_STARTED';
export const PAYMENT_INTENT_UPDATED = 'PAYMENT_INTENT_UPDATED';
export const PAYMENT_INTENT_FAILED = 'PAYMENT_INTENT_FAILED';
export const PAYMENT_CONFIRM_STARTED = 'PAYMENT_CONFIRM_STARTED';
export const PAYMENT_CONFIRM_SUCCEEDED = 'PAYMENT_CONFIRM_SUCCEEDED';
export const PAYMENT_CONFIRM_FAILED = 'PAYMENT_CONFIRM_FAILED';

export interface PaymentIntent {
    customerId?: string; // Local backend customerId.
    billing_details?: stripe.BillingDetails;
    status?: stripe.paymentIntents.PaymentIntentStatus; // Returned from Stripe when payment intent is created
    client_secret?: stripe.paymentIntents.PaymentIntent['client_secret']; // needed to compete a payment with Stripe Elements
    stripe_account?: string; // Stripe Direct Charge
    payment_method_types?: string[]; //['card'|'ideal'|'card_present'];
    payment_method?: stripe.paymentIntents.PaymentIntent['payment_method'];
    capture_method?: string;
    amount?: stripe.paymentIntents.PaymentIntent['amount'];
    currency?: stripe.paymentIntents.PaymentIntent["currency"];
    description?: stripe.paymentIntents.PaymentIntent['description'];
    error?: string;
    saveCustomer?: boolean;
};

// CREATE PAYMENT INTENTS
interface PaymentIntentStartedAction {
    type: typeof PAYMENT_INTENT_STARTED,
    payload: any,
};

interface PaymentIntentUpdatedAction {
    type: typeof PAYMENT_INTENT_UPDATED,
    payload: PaymentIntent, // this should be what stripes API returns!
};

interface PaymentIntentFailedAction {
    type: typeof PAYMENT_INTENT_FAILED,
    payload: PaymentIntent,
};

// CONFIRM PAYMENT
interface PaymentConfirmStartedAction {
    type: typeof PAYMENT_CONFIRM_STARTED,
    payload: ReactStripeElements.InjectedStripeProps,
};

interface PaymentConfirmSucceededAction {
    type: typeof PAYMENT_CONFIRM_SUCCEEDED,
    payload: PaymentIntent,
};


interface PaymentConfirmFailedAction {
    type: typeof PAYMENT_CONFIRM_FAILED,
    payload: PaymentIntent,
};

export type PaymentActionTypes =
    PaymentIntentStartedAction
    | PaymentIntentUpdatedAction
    | PaymentIntentFailedAction
    | PaymentConfirmStartedAction
    | PaymentConfirmSucceededAction
    | PaymentConfirmFailedAction;
