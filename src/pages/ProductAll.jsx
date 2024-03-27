import {useEffect, useState} from "react";
import {ProductCard} from "../components/ProductCard";
import {Col, Container, Row} from "react-bootstrap";

export const ProductAll = () => {

    const [productList, setProductList] = useState([]);

    const getProducts = async ()=>{
        let url = 'https://my-json-server.typicode.com/leejeongsueng1/react-router-practice/products';
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container  className="ListCont">
            <Row>
                {
                    productList.map((item, idx)=>(<Col lg={3}><ProductCard fluid={true}  item={item} />  </Col>))
                }
            </Row>

        </Container>
    )
}