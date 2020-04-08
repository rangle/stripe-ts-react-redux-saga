export const PRODUCT_SELECTED = 'PRODUCT_SELECTED';
export const PRODUCT_ADDED = 'PRODUCT_ADDED';
export const PRODUCT_REMOVED = 'PRODUCT_REMOVED';

export const CATALOG_LOAD_REQUESTED = 'CATALOG_LOAD_REQUESTED';
export const CATALOG_LOAD_SUCCEEDED = 'CATALOG_LOAD_SUCCEEDED';
export const CATALOG_LOAD_FAILED = 'CATALOG_LOAD_FAILED';



export type currencyType = 'cad' | 'usd';

export interface ProductType {
    productId: string,
    name: string,
    description: string,
    amount: number,
    currency: currencyType,
};

export interface CatalogType {
    products?: {
        [key: string]: ProductType
    };
}


// Load Catalog from API Call
interface CatalogLoadRequested {
    type: typeof CATALOG_LOAD_REQUESTED,
};

interface CatalogLoadSucceeded {
    type: typeof CATALOG_LOAD_SUCCEEDED,
    payload: CatalogType,
};


interface CatalogLoadFailed {
    type: typeof CATALOG_LOAD_FAILED,
};

export type CatalogActionTypes =
    CatalogLoadRequested
    | CatalogLoadSucceeded
    | CatalogLoadFailed;
