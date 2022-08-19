import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, tqy) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imgUrl: data.imgUrl,
            price: data.price,
            InStock: data.InStock,
            qty
        }
    })
    localStorage.setItem('cart', JSON.stringify())
}