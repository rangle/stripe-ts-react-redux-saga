import {
    customerUpdateAction,
    toggleSaveCustomerAction,
    toggleUseCardReader,
} from "./actions/customerActions";
import React from "react";
import {useDispatch, useSelector} from "react-redux";


import {customerSelector} from "./selectors/customerSelector";
import {useScript} from "../hooks/useScript";

const Customer: React.FC = () => {

    const dispatch = useDispatch();

    const customer = useSelector(customerSelector);
    const customer_name = customer.billing_details?.name || '';
    const customer_email = customer.billing_details?.email || '';
    const customer_phone = customer.billing_details?.phone || '';
    const isSavedCustomer = customer.isSaveCustomer;
    const isUseCardReader = customer.isUseCardReader;

    useScript("https://js.stripe.com/terminal/v1/");

    return <div className="customer-form">
        <div>Customer Information:</div>
        <div>
            <label>
                <input type="checkbox" value="isSavedCustomer" checked={isSavedCustomer} onChange={() => dispatch(toggleSaveCustomerAction())}/>Save my information for Later
            </label>
        </div>
        <div>
            <label>
                <input type="checkbox" value="isUseCardReader" checked={isUseCardReader} onChange={() => dispatch(toggleUseCardReader())}/>Complete reader using card reader
            </label>
        </div>
        <label>Name:
            <input type="text" value={customer_name} onChange={e => dispatch(customerUpdateAction({billing_details: {name: e.target.value}}))} />
        </label>
        <label>Email:
            <input type="text" value={customer_email} onChange={e => dispatch(customerUpdateAction({billing_details: {email: e.target.value}}))} />
        </label>
        <label>Phone:
            <input type="text" value={customer_phone} onChange={e => dispatch(customerUpdateAction({billing_details: {phone: e.target.value}}))} />
        </label>
    </div>
};

export default Customer;
