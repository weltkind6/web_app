import React from 'react';
import './Cart.css'
import {useSelector} from "react-redux";
import cart from "../../img/svg/basket.svg";
import CartMenu from "./CartMenu/CartMenu";

const Cart = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    return (
        <div>
            <div className="cart">
                <img src={cart} alt="cart-img" className="cart-img"/>
            </div>
            <CartMenu items={items}/>
            <button>Reset items length</button>
        </div>
    );
};

export default Cart;