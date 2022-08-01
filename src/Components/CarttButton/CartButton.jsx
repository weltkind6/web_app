import React, {useState} from 'react';
import './CartButton.css'
import {useDispatch, useSelector} from "react-redux";
import {setItemsInCart} from "../../redux/cart/reducer";

const CartButton = ({id, totalPrice, title}) => {
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch()
    const handleClick = e => {
        e.stopPropagation()
        dispatch(setItemsInCart({id, title, totalPrice}))
        setClicked(true)
    }

    return (
        <div className="cartButton">
            {clicked ?
                <button>Перейти в корзину</button> :
                <button onClick={handleClick}>Добавить в корзину</button>}
        </div>
    );
};

export default CartButton;