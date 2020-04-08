import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";

import { cartItemsSelector, cartSummerySelector } from "./selectors/cartSelector";
import CartItems from "./CartItems";

const CartDetails:React.FC = () => {

    const { numItems, subtotal, shipping } = useSelector(cartSummerySelector);

    const cartItems = useSelector(cartItemsSelector);

    const totalAmount = subtotal + shipping;

    return <>
        <CartItems items={cartItems} />
        <p>You have {numItems} item(s) in your Cart</p>
        <p>Sub total: <NumberFormat value={subtotal/100} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} prefix={'$'} /></p>
        <p>Shipping: <NumberFormat value={shipping/100} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} prefix={'$'} /></p>
        <p>Please Pay: <NumberFormat value={totalAmount/100} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} prefix={'$'} /></p>
        <div className="continue-shopping">
            <Link to="/">Continue Shopping</Link>
        </div>
        <div className="continue-checkout">
            <Link to="/checkout" className="checkoutButton">Checkout</Link>
        </div>
    </>
};

export default CartDetails;
