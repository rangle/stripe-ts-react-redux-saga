import {put, call, takeLatest} from 'redux-saga/effects';
import { httpGet } from "./services";

import {CATALOG_LOAD_REQUESTED, CatalogActionTypes, CatalogType, ProductType} from "../types/catalogTypes";
import * as actions from "../Catalogue/actions/catalogActions";
import {productsSelector} from "../Catalogue/selectors/catalogSelector";

export const watchCatalogSaga = [
    takeLatest(CATALOG_LOAD_REQUESTED, catalogLoader),
];

type BEItems = {
    productId: string,
    name: string,
    description: string,
    currency: 'cad' | 'usd',
    amount: number,
    createdAt: number,
    updatedAt: number, // timestamp
}

type BECatalogType = {
    Items: BEItems[],
    Count: number,
    ScannedCount: number,
}

export interface mCatalogType {
    [key: string]: ProductType
}

function* catalogLoader(action: CatalogActionTypes) {
    try {
        const url = 'catalog/getProducts';
        const { data } = yield call(httpGet, { url });
        console.log('data', JSON.stringify(data));
        const catalog: CatalogType = mapBEDataToCatalog(data);
        console.log('catalog', catalog);
        yield put(actions.CatalogLoadSucceeded(catalog));
    }
    catch(err) {
        // const errorMessage = (err.message)
        //     ? err.message
        //     : 'An unknown error has occurred';
        console.log('err', err);
        yield put(actions.CatalogLoadFailed());
    }
}

const mapBEDataToCatalog = (data: BECatalogType) => {
    const catalog: CatalogType = {products: {}};
    catalog.products = data.Items.reduce((products: mCatalogType, item: BEItems) => {
        products[item.productId] = {
            productId: item.productId,
            name: item.name,
            description: item.description,
            amount: item.amount,
            currency: item.currency,
        };
        return products;
    }, {});
    return catalog;
}
