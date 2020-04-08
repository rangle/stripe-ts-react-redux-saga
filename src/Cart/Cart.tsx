import React from 'react';
import { useSelector } from "react-redux";

import CartDetails from "../Cart/CartDetails";
import CartEmpty from "../Cart/CartEmpty";
import { itemCountSelector } from "../Cart/selectors/cartSelector";

const Cart: React.FC = () => {

    const isCartEmpty = useSelector(itemCountSelector);

    return (isCartEmpty === 0)
        ? <CartEmpty/>
        : <CartDetails/>
};

export default Cart;
