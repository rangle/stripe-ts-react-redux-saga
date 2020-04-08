import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas/'

import { cartReducer } from '../Cart/reducers/cartReducer';
import { catalogReducer } from "../Catalogue/reducers/catalogReducer";
import { customerReducer } from "../Checkout/reducers/customerReducer";
import { paymentReducer } from '../Checkout/reducers/paymentReducer';
import { ordersReducer } from "../Orders/ordersReducer";
import { sessionReducer } from "../Session/sessionReducer";

export const rootReducer = combineReducers({
    catalog: catalogReducer,
    cart: cartReducer,
    customer: customerReducer,
    orders: ordersReducer,
    payment: paymentReducer,
    session: sessionReducer,
});
export type rootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});

export const reduxStore = createStore(
    rootReducer,
    /* preloadedState, */ composeEnhancers(
        applyMiddleware(sagaMiddleware),
    ),
);

sagaMiddleware.run(rootSaga);
