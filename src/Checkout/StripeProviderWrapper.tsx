import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';

import InjectedCheckoutForm from "./CheckoutForm";

const StripeProviderWrapper: React.FC = () => {
    return  <>
        <StripeProvider apiKey="pk_test_QP9De2uF558ESMUMiptjQGGJ00NjEFWuim" >
            <Elements>
                <InjectedCheckoutForm />
            </Elements>
        </StripeProvider>
    </>
};

export default StripeProviderWrapper;
