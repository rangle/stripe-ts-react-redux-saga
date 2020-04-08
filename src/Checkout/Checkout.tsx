import React from 'react';
import {useSelector} from "react-redux";

import {itemCountSelector} from "../Cart/selectors/cartSelector";
import CartEmpty from "../Cart/CartEmpty";
import StripeProviderWrapper from "./StripeProviderWrapper";

const Checkout: React.FC = () => {

    const isCartEmpty = useSelector(itemCountSelector);

    if (isCartEmpty === 0) {
        return <CartEmpty/>
    };
    return <StripeProviderWrapper />
}

export default Checkout;
