import {
    CART_ITEM_ADD_SUCCEEDED,
    CartTypes,
    EMPTY_CART,
    ITEM_ADDED,
    ITEM_REMOVED,
    ITEM_SELECTED
} from "../../types/cartTypes";
import {PAYMENT_CONFIRM_SUCCEEDED} from "../../types/paymentTypes";
import {AnyAction} from "redux";

export const initialState: CartTypes = {
    items: {},
    shippingAmount: 0,
    taxAmount: 0,
};

export function cartReducer(
    state: CartTypes = initialState,
    action: AnyAction,
): CartTypes {
    switch (action.type) {
        case ITEM_ADDED:
            if (Object.keys(state.items).indexOf(action.payload.productId) !== -1) {
                const item = state.items[action.payload.productId];
                item.quantity += 1;
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [action.payload.productId]: item,
                    }
                }
            }
            action.payload.quantity = 1;
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.productId]: action.payload,
                }
            };

        case ITEM_SELECTED:
            return {
                ...state,
                selectedItemId: action.payload,
            };
        case ITEM_REMOVED:
            const { items } = state;
            const { [ action.payload ]: _, ...newItems } = items;
            return {
                ...state,
                items: newItems,
                selectedItemId: (state.selectedItemId === action.payload) ? undefined : state.selectedItemId,
            };
        case CART_ITEM_ADD_SUCCEEDED:
        case EMPTY_CART:
        case PAYMENT_CONFIRM_SUCCEEDED:
            return {
            ...initialState
        }
        default:
            return state
    }
}
