import {useEffect} from "react";
import {ProductCard} from "../components/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {productAction} from "../redux/actions/ProductAction"

export const ProductAll = () => {

    const productList = useSelector(state=>state.product.productList);
    const [query,setQuery]=useSearchParams();

    const dispatch = useDispatch();

    const getProducts = async ()=>{
        let searchQuery = query.get("q") || "";
        dispatch(productAction.getProducts(searchQuery))

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