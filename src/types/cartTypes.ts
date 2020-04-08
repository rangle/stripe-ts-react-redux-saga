import {ProductType} from "./catalogTypes";

export const ITEM_SELECTED = 'ITEM_SELECTED';
export const ITEM_ADDED = 'ITEM_ADDED';
export const CART_ITEM_ADD_SUCCEEDED = 'CART_ITEM_ADD_SUCCEEDED';
export const CART_ITEM_ADD_FAILED = 'CART_ITEM_ADD_FAILED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
export const EMPTY_CART = 'EMPTY_CART';

export type cartItemIdType = string;

type productId = string;
type errorMessage = string;

export interface CartItemType {
    name: string;
    amount: number;
    quantity: number;
    serverSideCartIds?: string[],
    currency: 'cad' | 'usd';
};

export type CartItemsType = {[key: string]: CartItemType};

export interface CartTypes {
    items: CartItemsType,
    selectedItemId?: cartItemIdType,
    shippingAmount: number,
    taxAmount: number,
};

interface itemSelectedAction {
    type:  typeof ITEM_SELECTED,
    payload: string;
};

export interface itemAddedAction {
    type: typeof ITEM_ADDED,
    payload: ProductType,
};

export interface cartItemAddSucceeded {
    type: typeof CART_ITEM_ADD_SUCCEEDED,
    payload: productId,
}

export interface cartItemAddFailed {
    type: typeof CART_ITEM_ADD_FAILED
    payload: errorMessage,
}

interface itemRemovedAction {
    type: typeof ITEM_REMOVED,
    payload: string,
};

interface emptyCartAction {
    type: typeof EMPTY_CART,
}

export type CartActionTypes =
    itemSelectedAction |
    itemAddedAction |
    itemRemovedAction |
    emptyCartAction;
