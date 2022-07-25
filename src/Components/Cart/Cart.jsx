import React from 'react';
import './Cart.css'
import {useSelector} from "react-redux";
import cart from "../../img/svg/basket.svg";

const Cart = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    const finalPrice = (items.reduce((acc, value) => acc + value, 0))

    return (
        <div>
            <h5>{finalPrice}</h5>
            <div className="cart">
                <img src={cart} alt="cart-img" className="cart-img"/>
            </div>
        </div>
    );
};

export default Cart;