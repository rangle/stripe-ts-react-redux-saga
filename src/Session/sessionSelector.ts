import { createSelector } from 'reselect';
import {rootState} from "../reducers";


const loggedInSelector = ({session}: rootState) => session.isLoggedIn;
const credentialsSelector = ({session}: rootState) => session.credentials;


export const isLoggedInSelector = createSelector(
    loggedInSelector,
    credentialsSelector,
    (loggedIn, creds) => (loggedIn && creds) ? true : false
);
