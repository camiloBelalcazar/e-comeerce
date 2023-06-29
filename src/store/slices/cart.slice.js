import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce, getConfig } from "../../utils/configAxios";

const initialState = {
    products: [],
    isShowCart: false,
}


const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        changeIsShowCart: (state) => { 
            state.isShowCart = !state.isShowCart
        },
        setProducts: (state, action) => {
            const newProducts = action.payload;
            state.products = newProducts;
        }
    }
})

export const { changeIsShowCart, setProducts } = cartSlice.actions;

export const getCartProducts = () => (dispatch) => {
    axiosEcommerce.get('/cart', getConfig())
        .then(({ data }) => dispatch(setProducts(data)))
        .catch((error) => console.log(error))
}

export const addProductToCart = (data) => (dispatch) => { 
    axiosEcommerce.post(`/cart`, data, getConfig())
        .then(() => dispatch(getCartProducts()))
        .catch((error) => console.log(error))
}

export const deleteProductCart = (productId) => (dispatch) => {
    axiosEcommerce.delete(`/cart/${productId}`, getConfig())
        .then(() => dispatch(getCartProducts()))
        .catch((error) => console.log(error))
}


export const chekoutCart = () => (dispatch) => {
    axiosEcommerce.post("/purchases", {}, getConfig())
        .then(() => dispatch(getCartProducts()))
        .catch((error) => console.log(error))

}

export default cartSlice.reducer;