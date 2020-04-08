import { all } from 'redux-saga/effects';

import { watchPaymentSaga } from "./startPaymentSagas";
import { watchCartSaga } from "./cartSagas";
import { watchCatalogSaga } from "./catalogSagas";
import { watchTerminalSaga } from "./terminalSagas";

function* rootSaga(){
    yield all([
        ...watchCatalogSaga,
        ...watchPaymentSaga,
        ...watchTerminalSaga,
        ...watchCartSaga,
    ]);
}

export default rootSaga;
