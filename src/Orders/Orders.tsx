import React from 'react';
import { useSelector } from "react-redux";
import { ordersSelector } from "./ordersSelector";

const Orders: React.FC = () => {

    const orders = useSelector(ordersSelector);

    return <>
        <p>My Orders</p>
    </>
}
