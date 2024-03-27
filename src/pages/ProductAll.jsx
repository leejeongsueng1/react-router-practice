import {useEffect, useState} from "react";
import {ProductCard} from "../components/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

export const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query,setQuery]=useSearchParams();

    const getProducts = async ()=>{
        let searchQuery = query.get("q") || "";
        let url = `https://my-json-server.typicode.com/leejeongsueng1/react-router-practice/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [query]);

    return (
        <Container  className="ListCont">
            <Row>
                {
                    productList.map((item, idx)=>(<Col key={idx} lg={3}><ProductCard fluid={true} item={item} />  </Col>))
                }
            </Row>

        </Container>
    )
}