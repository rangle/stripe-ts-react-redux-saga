import {
    CATALOG_LOAD_FAILED,
    CATALOG_LOAD_REQUESTED,
    CATALOG_LOAD_SUCCEEDED,
    CatalogActionTypes,
    CatalogType,
} from "../../types/catalogTypes";

export const CatalogLoadRequested = (): CatalogActionTypes => {
    console.log('action fired');
    return {
        type: CATALOG_LOAD_REQUESTED,
    };
};

export const CatalogLoadSucceeded = (catalog: CatalogType): CatalogActionTypes => ({
    type: CATALOG_LOAD_SUCCEEDED,
    payload: catalog,
});

export const CatalogLoadFailed = () => ({
    type: CATALOG_LOAD_FAILED,
});
