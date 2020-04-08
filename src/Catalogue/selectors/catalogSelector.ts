import {rootState} from "../../reducers";
import {createSelector} from "reselect";


export const productsSelector = ({ catalog }: rootState) => catalog.products;

export const numProducts = createSelector(
    productsSelector,
    (products): number =>
        (products) ? Object.keys(products).length : 0,
);
