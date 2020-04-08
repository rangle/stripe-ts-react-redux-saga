import {
    SESSION_CLEAR,
    SESSION_REQUEST_NEW,
    SESSION_SET,
    SessionActionTypes,
    SessionType
} from "../types/sessionTypes";

export const initialState: SessionType = {
    isLoggedIn: false,
    credentials: undefined,
    user: undefined,
}

export function sessionReducer(
    state = initialState,
    action: SessionActionTypes
): SessionType {
    switch (action.type) {
        case SESSION_SET :
            return {
                ...state,
                isLoggedIn: true,
                credentials: action.payload,
            };
        case SESSION_CLEAR :
            return {
                ...state,
                credentials: undefined,
                user: undefined,
            };
        default :
            return state;
    };
};

