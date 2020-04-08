import { put, call, select, takeLatest } from 'redux-saga/effects';
import { httpPost } from "./services";

import {
    CartActionTypes,
    EMPTY_CART,
    ITEM_ADDED,
    ITEM_REMOVED,
    itemAddedAction
} from "../types/cartTypes";
import * as actions from "../Cart/actions/CartActions";
import {getCustomerId} from "../Checkout/selectors/customerSelector";

export const watchCartSaga = [
    takeLatest(ITEM_ADDED, cartAddItem),
    takeLatest(ITEM_REMOVED, cartRemoveItem),
    takeLatest(EMPTY_CART, cartEmpty),
];

function* cartAddItem(action: itemAddedAction) {
    try {
        const url = 'cart/addItem';
        const customerId = yield select(getCustomerId);
        const data = {
            customer: (customerId) ?? 'new',
            item: action.payload.productId,
        };
        const { result } = yield call(httpPost, { url, data });
        console.log('data', JSON.stringify(result));
        yield put(actions.cartItemAddSucceeded(result));
    }
    catch(err) {
        console.log('err', err);
        yield put(actions.cartItemAddFailed(err.message));
    }
}

function* cartRemoveItem(action: CartActionTypes) {

}

function* cartEmpty(action: CartActionTypes) {

}
