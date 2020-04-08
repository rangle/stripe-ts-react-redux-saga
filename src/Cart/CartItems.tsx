import React from 'react';
import {CartItemsType, CartTypes} from "../types/cartTypes";
import NumberFormat from "react-number-format";

const CartItems:React.FC<Pick<CartTypes, 'items'> > = ({items}) => {
    return <div className="cart-items">
        { Object.values(items).map((item: any) => <div  className="row">
            <div className="name"> Name: {item.name}</div>
            <div className="name"> Quantity: {item.quantity}</div>
            <div className="amount"><NumberFormat value={item.amount/100} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} prefix={'$'} /></div>
        </div>)
    }
</div>
}

export default CartItems;
