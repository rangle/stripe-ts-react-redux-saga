import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import { itemAddedAction } from "../Cart/actions/CartActions";
import { productsSelector } from "./selectors/catalogSelector";
import {Product} from "./Product";
import CartItemCount from "../Cart/CartItemCount";
import {itemCountSelector} from "../Cart/selectors/cartSelector";
import {CatalogLoadRequested} from "./actions/catalogActions";

const Catalogue: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CatalogLoadRequested())
    }, []);

    const products = useSelector(productsSelector);
    const count = useSelector(itemCountSelector);

    if (! products) {
        return <div className="cartEmpty">We are all sold out!</div>
    }
    const addToCart = (productId: string) => {
        const item = {
            cartItemId: productId,
            ...products[productId],
        }
        dispatch(itemAddedAction(item));
    };

    const ShowCartLink = (count > 0)
        ? <Link to="/cart"><CartItemCount /></Link>
        : <CartItemCount />;

    return <>
        <div className="cartItemIndicator">{ ShowCartLink }</div>
        { Object.keys(products).map(productId =>  <Product product={products[productId]} productId={productId} addToCart={addToCart}/>) }
     </>
};

export default Catalogue;
