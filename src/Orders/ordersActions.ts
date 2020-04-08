import {
    ORDER_ITEM_SELECTED,
    ORDERS_ADDED,
    OrdersActionTypes,
    OrdersType
} from "../types/ordersTypes";

export const ordersAddedAction = (order: OrdersType): OrdersActionTypes => ({
    type: ORDERS_ADDED,
    payload: order,
});

export const itemRemovedAction = (orderItemIndex: number): OrdersActionTypes => ({
    type: ORDER_ITEM_SELECTED,
    payload: orderItemIndex,
});
