import {put, call, takeLatest, select} from 'redux-saga/effects';
import { httpPost } from "./services";

import * as actions from "../Catalogue/actions/catalogActions";
import {OrderAddedAction, ORDERS_ADDED, OrdersActionTypes, OrdersType} from "../types/ordersTypes";
import {customerSelector} from "../Checkout/selectors/customerSelector";

export const watchCatalogSaga = [
    takeLatest(ORDERS_ADDED, orderAdded),
];

type BEProducts = {
    productId: string,
    quantity: number,
    amount: number,
}

type BEOrders = {
    customerId: string,
    products: BEProducts[]
}

function* orderAdded(action: OrderAddedAction) {
    try {
        const url = 'orders/addOrder';
        const customer = yield select(customerSelector);
        const data: BEOrders = {
            customerId: customer.id,
            products: mapOrderToBE(action.payload),
        }
        const { result } = yield call(httpPost, { url, data });
        yield put(actions.CatalogLoadSucceeded(result));
    }
    catch(err) {
        const errorMessage = (err.message)
            ? err.message
            : 'An unknown error has occurred';
        console.log('err', {err, errorMessage});
        yield put(actions.CatalogLoadFailed());
    }
}

const mapOrderToBE = (order: OrdersType ) =>
    order.orders.map((item ) => ({
        productId: item.productId,
        quantity: item.quantity,
        amount: item.total,
    }));
