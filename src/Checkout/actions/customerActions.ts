import {
    CustomerType,
    CUSTOMER_REMOVE,
    CUSTOMER_UPDATE,
    TOGGLE_SAVE_CUSTOMER,
    TOGGLE_USE_TERMINAL,
    TERMINAL_CONNECTED,
    customerProperty, TERMINAL_CONNECT_FAILED,
} from "../../types/customerTypes";

/**
 * @todo
 * create better actions for updating CustomerType.billing_details
 */
export const  customerUpdateAction  = (customer: Partial<CustomerType>) => ({
    type: CUSTOMER_UPDATE,
    payload: customer,
});

export const  billingInfoUpdateAction  = (customerProperty: customerProperty) => ({
    type: CUSTOMER_UPDATE,
    payload: customerProperty,
});


export const customerRemoveAction = (customerId: string) => ({
    type: CUSTOMER_REMOVE,
    payload: customerId,
});

export const toggleSaveCustomerAction = () => ({
    type: TOGGLE_SAVE_CUSTOMER,
});

export const toggleUseCardReader = () => ({
    type: TOGGLE_USE_TERMINAL,
});

export const terminalConnected = (secret: string) => ({
    type: TERMINAL_CONNECTED,
    payload: secret,
});

export const terminalConnectFailed = () => ({
    type: TERMINAL_CONNECT_FAILED,
});


