import { AnyAction} from "redux";
import {
    ORDERS_ADDED,
    OrdersType,
} from "../types/ordersTypes";

const initialState = {
    orders: [
    ],
};

export const ordersReducer = (
    state: OrdersType = initialState,
    action: AnyAction,
): OrdersType => {
    switch (action.type) {
        case ORDERS_ADDED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    };
};
