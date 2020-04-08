import {
    PAYMENT_CONFIRM_FAILED,
    PAYMENT_CONFIRM_SUCCEEDED,
    PAYMENT_INTENT_FAILED,
    PAYMENT_INTENT_UPDATED,
    PaymentActionTypes,
    PaymentIntent
} from "../../types/paymentTypes";

export const initialState: PaymentIntent = {
};

export function paymentReducer(
    state = initialState,
    action: PaymentActionTypes
): PaymentIntent {
    switch (action.type) {
        case PAYMENT_INTENT_UPDATED:
            return {
                ...state,
                ...action.payload,
                error: undefined,
            };
        case PAYMENT_INTENT_FAILED:
            return {
                ...state,
                ...action.payload,
            };
        case PAYMENT_CONFIRM_SUCCEEDED:
            return {
                ...state,
                ...action.payload,
                error: undefined,
            }
        case PAYMENT_CONFIRM_FAILED:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
