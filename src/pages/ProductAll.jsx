import {useEffect, useState} from "react";
import {ProductCard} from "../components/ProductCard";

export const ProductAll = () => {

    const [productList, setProductList] = useState([]);

    const getProducts = async ()=>{
        let url = 'http://localhost:3004/products';
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <ProductCard/>
        </div>
    )
}