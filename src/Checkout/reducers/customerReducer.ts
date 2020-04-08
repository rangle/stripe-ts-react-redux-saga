import { v1 } from 'uuid';
import {
    BILLING_INFO_UPDATE,
    CUSTOMER_REMOVE,
    CUSTOMER_UPDATE,
    CustomerActionTypes,
    CustomerType, TERMINAL_CONNECT_FAILED,
    TERMINAL_CONNECTED,
    TOGGLE_SAVE_CUSTOMER,
    TOGGLE_USE_TERMINAL
} from "../../types/customerTypes";

import {CART_ITEM_ADD_SUCCEEDED, cartItemAddSucceeded} from "../../types/cartTypes";

export const initialState: CustomerType = {
    id: undefined,
    customerId: v1(), // Back end customerId grouping shopping cart items to a user.
    billing_details: {},
    isSaveCustomer: false,
    isUseCardReader: false,
    terminalToken: undefined,
};

export function customerReducer(
    state = initialState,
    action: CustomerActionTypes | cartItemAddSucceeded
): CustomerType {
    switch (action.type) {
        case CUSTOMER_UPDATE:
            return {
                ...state,
                billing_details: {
                    ...state.billing_details,
                    ...action.payload.billing_details,
                },
            };
        case BILLING_INFO_UPDATE:
            return {
                ...state,
                billing_details: {
                    ...state.billing_details,
                    [Object.keys(action.payload)[0]]: action.payload[Object.keys(action.payload)[0]]
                },
            };
        case CUSTOMER_REMOVE:
            return {
                ...initialState
            }
        case TOGGLE_SAVE_CUSTOMER:
            return {
                ...state,
                isSaveCustomer: !state.isSaveCustomer,
            }
        case TOGGLE_USE_TERMINAL:
            return {
                ...state,
                isUseCardReader: !state.isUseCardReader,
            }
        case TERMINAL_CONNECTED:
            return {
                ...state,
                terminalToken: action.payload,
            }
        case TERMINAL_CONNECT_FAILED:
            return {
                ...state,
                isUseCardReader: false,
            }
        case CART_ITEM_ADD_SUCCEEDED:
            return {
                ...state,
                customerId: action.payload,
            }
        default:
            return state
    }
}
