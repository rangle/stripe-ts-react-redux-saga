import { rootState } from "../../reducers";
import {CartItemType, CartTypes} from "../../types/cartTypes";

export const itemCountSelector = ({cart}: rootState): number => Object.keys(cart.items).length;

export const cartSummerySelector = ({cart}: rootState) =>  ({
    numItems: Object.keys(cart.items).length,
    subtotal: Object.values(cart.items).reduce((sum: number, item: CartItemType) => sum + (item.amount * item.quantity), 0),
    shipping: cart.shippingAmount,
});

export const cartItemsSelector = ({cart}: rootState) => cart.items;
