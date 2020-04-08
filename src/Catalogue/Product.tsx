import React from 'react';
import NumberFormat from 'react-number-format';
import {ProductType} from "../types/catalogTypes";

interface IProps {
    product: ProductType;
    productId: string;
    addToCart: Function;
};

export const Product:React.FC<IProps> = ({ product, productId, addToCart }) => {

    const handleAddToCard = () => { addToCart(productId); }

    return <div className="product">
        <p>{product.description}
            &nbsp;
            <NumberFormat value={product.amount/100} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} prefix={'$'} />
            &nbsp;
            {product.currency.toUpperCase()}
        </p>
        <button onClick={handleAddToCard}>
            Add to Cart
        </button>
    </div>
}
