import React from 'react';
import './CartMenu.css'
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../../redux/cart/reducer";

const CartMenu = ({items}) => {
    const finalPrice = (items.reduce((acc, value) => acc + value.totalPrice, 0))
    const dispatch = useDispatch()
    const [id] = items
    console.log(items)
    const deleteItemHandler = (currentID) => {
        dispatch(deleteItemFromCart(currentID))
    }

    return (
        <div className="cartMenu">
            <div>
                {items.length === 0 ? <h4>Корзина пуста</h4> :
                    <div>
                        {items.map(({id, title, totalPrice}) =>
                            <div
                                key={id}
                                style={{border: '1px solid red', cursor: 'pointer'}}
                                onClick={() => deleteItemHandler(id)}
                            >
                                {title}{totalPrice}
                                <button className="button">-</button>
                            </div>)}
                        <h5>К оплате: {finalPrice}</h5>
                        <button>Очистить корзину</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default CartMenu;