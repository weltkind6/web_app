import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
    },
    reducers: {
        setItemsInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload)
        },
        removeAllProducts: (state, action) => {
            state.itemsInCart = state.itemsInCart = []
        }

    }
})

export const {setItemsInCart, deleteItemFromCart, removeAllProducts} = cartSlice.actions
export default cartSlice.reducer