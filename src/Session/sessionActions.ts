import {SESSION_CLEAR, SESSION_REQUEST_NEW, SESSION_SET, SessionActionTypes} from "../types/sessionTypes";

export const sessionSet = (credentials: string): SessionActionTypes => ({
    type: SESSION_SET,
    payload: credentials,
});

export const sessionClear = (): SessionActionTypes => ({
    type: SESSION_CLEAR,
});

export const sessionRequest = (): SessionActionTypes => ({
    type: SESSION_REQUEST_NEW,
})
