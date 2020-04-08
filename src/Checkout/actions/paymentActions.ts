import {ReactStripeElements} from "react-stripe-elements";

import {
    PAYMENT_CONFIRM_FAILED,
    PAYMENT_CONFIRM_STARTED,
    PAYMENT_CONFIRM_SUCCEEDED,
    PAYMENT_INTENT_FAILED,
    PAYMENT_INTENT_STARTED,
    PAYMENT_INTENT_UPDATED,
    PaymentActionTypes,
    PaymentIntent,
} from "../../types/paymentTypes";

/**
 * When a User requests a paymentIntent be created
 * @param amount
 * @param payType
 */
export const paymentIntentStartedAction = (): PaymentActionTypes => ({
    type: PAYMENT_INTENT_STARTED,
    payload: undefined,
});

/**
 * When a paymentIntent is Updated by Completing, Authorizing, or Cancelling
 * @param status
 */
export const paymentIntentUpdatedAction = (paymentData: PaymentIntent): PaymentActionTypes => ({
    type: PAYMENT_INTENT_UPDATED,
    payload: paymentData,
});

export const paymentIntentFailedAction = (paymentIntent: PaymentIntent): PaymentActionTypes => ({
    type: PAYMENT_INTENT_FAILED,
    payload: paymentIntent,
});


export const paymentConfirmStartedAction = ({stripe, elements}: ReactStripeElements.InjectedStripeProps): PaymentActionTypes => ({
    type: PAYMENT_CONFIRM_STARTED,
    payload: {stripe, elements},
})

export const paymentConfirmSucceededAction = (paymentData: PaymentIntent): PaymentActionTypes => ({
    type: PAYMENT_CONFIRM_SUCCEEDED,
    payload: paymentData,
});

/**
 * When a paymentIntent has failed to be created or updated
 * @param error
 */
export const paymentConfirmFailedAction = (paymentIntent: PaymentIntent): PaymentActionTypes => ({
    type: PAYMENT_CONFIRM_FAILED,
    payload: paymentIntent,
});
