export const SESSION_SET = 'SESSION_SET';
export const SESSION_CLEAR = 'SESSION_CLEAR';
export const SESSION_REQUEST_NEW = 'SESSION_REQUEST_NEW';

export type User = {
    userName: string;
    email: string;
};

export type SessionType = {
    isLoggedIn: boolean;
    user?: User;
    credentials?: string;
};


interface setSession {
    type: typeof SESSION_SET,
    payload: string,
};

interface clearSession {
    type: typeof SESSION_CLEAR,
}

interface requestNewSession {
    type: typeof SESSION_REQUEST_NEW
}

export type SessionActionTypes =
    setSession
    | clearSession
    | requestNewSession;
