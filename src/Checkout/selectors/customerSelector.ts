import { createSelector } from 'reselect';
import {rootState} from "../../reducers";


export const customerSelector = ({customer}: rootState) => customer;

export const getCustomerId = createSelector(
    customerSelector,
    (customer) => customer.customerId,
);

export const getIsSaveCustomer = createSelector(
    customerSelector,
    (customer) => customer.isSaveCustomer,
);

export const getBillingDetails = createSelector(
    customerSelector,
    (customer) => customer.billing_details,
);

export const getUseTerminalPreference = createSelector(
    customerSelector,
    (customer) => customer.isUseCardReader,
);

export const getTerminalToken = createSelector(
    customerSelector,
    (customer) => customer.terminalToken,
);
