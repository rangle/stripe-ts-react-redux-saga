
export const CUSTOMER_UPDATE = 'CUSTOMER_UPDATE';
export const BILLING_INFO_UPDATE = 'BILLING_INFO_UPDATE';
export const CUSTOMER_REMOVE = 'CUSTOMER_REMOVE';
export const TOGGLE_SAVE_CUSTOMER = 'TOGGLE_SAVE_CUSTOMER';
export const TOGGLE_USE_TERMINAL = 'TOGGLE_USE_TERMINAL';
export const TERMINAL_CONNECTED = 'TERMINAL_CONNECTED';
export const TERMINAL_CONNECT_FAILED = 'TERMINAL_CONNECT_FAILED';

export interface CustomerType {
    id?: string,
    customerId?: string,
    billing_details?: stripe.BillingDetails,
    isSaveCustomer: boolean,
    isUseCardReader: boolean,
    terminalToken?: string,
}

export type customerProperty = {
    [key: string]: CustomerType["billing_details"];
};

interface billingDetailUpdate {
    type: typeof BILLING_INFO_UPDATE,
    payload: customerProperty,
}

interface customerUpdateAction {
    type: typeof CUSTOMER_UPDATE,
    payload: CustomerType, // this should be what stripes API returns!
};

interface customerRemoveAction {
    type: typeof CUSTOMER_REMOVE,
    payload: string,
};

interface toggleSaveCustomerAction {
    type: typeof TOGGLE_SAVE_CUSTOMER,
}

export interface toggleUseTerminalAction {
    type: typeof TOGGLE_USE_TERMINAL,
}

export interface terminalConnectedAction {
    type: typeof TERMINAL_CONNECTED,
    payload: string, // this should be a "secret" token that stripes API returns!
};

export interface terminalConnectFailedAction {
    type: typeof TERMINAL_CONNECT_FAILED,
};

export type CustomerActionTypes =
    billingDetailUpdate
    | customerUpdateAction
    | customerRemoveAction
    | toggleSaveCustomerAction
    | toggleUseTerminalAction
    | terminalConnectedAction
    | terminalConnectFailedAction;
