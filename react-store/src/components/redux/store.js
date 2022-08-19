import { configureStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers"

const reducer = combineReducers({
    cart: cartReducer
})
const middleware = [thunk]

const store = configureStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;