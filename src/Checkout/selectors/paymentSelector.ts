import { createSelector } from 'reselect';
import {rootState} from "../../reducers";

export const getClientSecret = ({ payment }: rootState) => payment.client_secret;
export const paymentSelector = ({payment}: rootState) => payment.status;
export const errorSelector = ({payment}: rootState) => payment.error;

export const isCheckoutReadySelector = createSelector(
    getClientSecret,
    paymentSelector,
    (secret, status) => (secret && status !== 'succeeded') ? true : false,
);
