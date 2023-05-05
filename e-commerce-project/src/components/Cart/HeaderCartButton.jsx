import React,{useContext} from 'react';
import CartContext from '../../store/cart-context';

import Cart from "./Cart";

import "./HeaderCartButton.css";

const HeaderCartButton = () => {
    const cartCtx = useContext(CartContext)

    return (
        <>
            <Cart title={"Cart"} color={"outline-info"} />
            <span>{cartCtx.items.length}</span>
        </>
    );
};

export default HeaderCartButton;
