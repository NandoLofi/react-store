import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducers"

const reducer = combineReducers({
    cart: cartReducer
})

 const store = configureStore({
    reducer: {},
 })

export default store;