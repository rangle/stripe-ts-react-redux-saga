import React from 'react';
import {useSelector} from "react-redux";
import {itemCountSelector} from "./selectors/cartSelector";

const CartItemCount: React.FC = () => {
    const count = useSelector(itemCountSelector);
    const items = (count === 1) ? 'item' : 'items';
    return <>
        <p className="itemCount">{count} {items}</p>
    </>
};

export default CartItemCount;
