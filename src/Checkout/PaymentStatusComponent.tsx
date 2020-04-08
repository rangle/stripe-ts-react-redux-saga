import React from 'react';
import {useSelector} from "react-redux";
import {errorSelector, paymentSelector} from "./selectors/paymentSelector";

export const PaymentStatus: React.FC = () => {

    const status = useSelector( paymentSelector );
    const error = useSelector( errorSelector );

    return <>
        <div className="paymentStatus">
            {status && <p>Status: {status}</p>}
            {error && <p>Error: {error}</p>}
        </div>
     </>
};
