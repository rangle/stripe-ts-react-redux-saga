import {put, call, takeLatest} from 'redux-saga/effects';
import { httpGet } from "./services";

import {SESSION_REQUEST_NEW, SessionActionTypes} from "../types/sessionTypes";

export const watchCatalogSaga = [
    takeLatest(SESSION_REQUEST_NEW, requestSession),
];

type credentials = string;


function* requestSession(action: SessionActionTypes) {

}
