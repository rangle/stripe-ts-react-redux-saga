import React from 'react';
import { CardElement } from 'react-stripe-elements';

const style = {
    base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
            color: "#aab7c4"
        }
    },
    invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
    }
};

const CreditCardSection: React.FC = () => {
    return <>
        <label>
            Card details
            <CardElement className="MyCardElement" style={style} />
        </label>
        <button>Pay now</button>
     </>
};

export default CreditCardSection;
