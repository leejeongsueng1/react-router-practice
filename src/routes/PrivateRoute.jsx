import {ProductDetail} from "../pages/ProductDetail";
import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const PrivateRoute = () => {
    const auth = useSelector(state=>state.auth.authenticate);
    return  auth ? <ProductDetail/> : <Navigate to="/login" />
}