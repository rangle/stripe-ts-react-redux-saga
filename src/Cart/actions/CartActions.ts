import {
    CartActionTypes,
    EMPTY_CART,
    ITEM_ADDED,
    CART_ITEM_ADD_SUCCEEDED,
    CART_ITEM_ADD_FAILED,
    ITEM_REMOVED,
    ITEM_SELECTED,
} from '../../types/cartTypes';
import {ProductType} from "../../types/catalogTypes";

export const itemAddedAction = (product: ProductType): CartActionTypes => ({
    type: ITEM_ADDED,
    payload: product,
});

export const cartItemAddSucceeded = ({customerId, cartItemId}: {customerId: string, cartItemId: string}) => ({
    type: CART_ITEM_ADD_SUCCEEDED,
    payload: { customerId, cartItemId },
})

export const cartItemAddFailed = (errorMessage: string) => ({
    type: CART_ITEM_ADD_FAILED,
    payload: errorMessage
})


export const itemSelectedAction = (cartItemId: string): CartActionTypes => ({
    type: ITEM_SELECTED,
    payload: cartItemId,
});

export const itemRemovedAction = (cartItemId: string): CartActionTypes => ({
    type: ITEM_REMOVED,
    payload: cartItemId,
});

export const emptyCartAction = (): CartActionTypes => ({
    type: EMPTY_CART,
})
