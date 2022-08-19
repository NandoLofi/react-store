import * as actionTypes from '../constants/cartConstants'


export const cartReducer = (state = {cartItems: []}, action)=> {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = actionTypes;
            const existItem = state.cartItems.find((x) => x.product === item.product)

            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x)=> x.product === item.product)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
            case actionTypes.REMOVE_FROM_CART:
                return {
                    ...state,
                    cartItems: state.cartItems.filter((x)=> x.product !== actionTypes)
                }
        default:
            return state
    }
}