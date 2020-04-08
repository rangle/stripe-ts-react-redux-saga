import React from 'react';
import {Link} from "react-router-dom";
import {PaymentStatus} from "../Checkout/PaymentStatusComponent";
import ContinueShopping from "../SpaceShop/ContinueShopping";

const CartEmpty: React.FC = () => {
    return <div className="empty-cart">
        <p>Your Cart is empty</p>
        <ContinueShopping/>
        <div className="post-payment">
            <PaymentStatus/>
        </div>
    </div>;
};

export default CartEmpty;
