import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
        isCartClear: true
    },
    reducers: {
        setItemsInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload)
        },
        setClearCart: (state, action) => {
            state.isCartClear = state.isCartClear === action.payload
        }
    }
})

export const {setItemsInCart, deleteItemFromCart, setClearCart} = cartSlice.actions
export default cartSlice.reducer