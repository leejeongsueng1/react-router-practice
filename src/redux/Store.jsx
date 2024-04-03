
import {configureStore} from "@reduxjs/toolkit";
import authenticateReducer from "./reducer/AuthenticateSlice";
import productReducer from "./reducer/ProductSlice";

let store = configureStore({
    reducer:{
        auth : authenticateReducer,
        product: productReducer
    }
});

export default store;