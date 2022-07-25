import React, {useState} from 'react';
import './CartButton.css'
import {useDispatch} from "react-redux";
import {setItemsInCart} from "../../redux/cart/reducer";

const CartButton = ({totalPrice}) => {
    const [buttonText, setButtonText] = useState("Добавить в корзину")
    const dispatch = useDispatch()
    const addToBasketHandler = text => setButtonText(text)
    const handleClick = e => {
        e.stopPropagation()
        dispatch(setItemsInCart(totalPrice))
        addToBasketHandler('Перейти в корзину')
    }

    return (
        <div className="cartButton">
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    );
};

export default CartButton;