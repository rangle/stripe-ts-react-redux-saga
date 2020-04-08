export const ORDERS_ADDED = 'ORDERS_ADDED';
export const ORDER_ITEM_SELECTED = 'ORDER_ITEM_SELECTED';

export interface OrderItemType {
    productId: string,
    quantity: number,
    total: number,
    orderedAt: Date,
};

export interface OrdersType {
    orders: OrderItemType[],
}

export interface OrderAddedAction {
    type: typeof ORDERS_ADDED,
    payload: OrdersType,
};

interface OrderItemSelectedAction {
    type: typeof ORDER_ITEM_SELECTED,
    payload: number,
};


export type OrdersActionTypes =
    OrderAddedAction
    | OrderItemSelectedAction;
