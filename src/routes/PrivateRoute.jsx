import {ProductDetail} from "../pages/ProductDetail";
import React from "react";
import {Navigate} from "react-router-dom";

export const PrivateRoute = ({auth}) => {
    return  auth ? <ProductDetail/> : <Navigate to="/login" />
}