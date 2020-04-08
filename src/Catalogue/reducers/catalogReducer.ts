import { AnyAction } from "redux";
import {CATALOG_LOAD_FAILED, CATALOG_LOAD_SUCCEEDED, CatalogType} from "../../types/catalogTypes";

const initialState: CatalogType = {
    products: {},
};

export function catalogReducer(
    state: CatalogType = initialState,
    action: AnyAction,
): CatalogType {
    switch (action.type) {
        case CATALOG_LOAD_SUCCEEDED :
            return {
                ...action.payload
            };
        case CATALOG_LOAD_FAILED :
            return {
                products: {},
            }
    }
    return state;
}
