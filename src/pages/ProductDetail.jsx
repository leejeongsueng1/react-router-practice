import {Col, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {productAction} from "../redux/actions/ProductAction";

export const ProductDetail = () => {
    let {id} = useParams();
    const product = useSelector(state=>state.product.product);
    const dispatch = useDispatch();

    const getItemDetail = async ()=>{
        dispatch(productAction.getProduct(id));
    }

    useEffect(() => {
        getItemDetail();

    }, [id] );


    return (
        <Container className="ProductDetail">
            <Col className="col-5">
                <img className="DetailImg" src={product?.img}/>
            </Col>
            <Col className="col-7 ProductInfo">
                <div className="ProductTitle">{product?.title}</div>
                <div className="ProductPrice">\{product?.price}</div>

                {product?.choice ? <div className="ProductChoice">Conscious Choice</div> : ""}
                <select className="SizeSelect">
                    <option value="none" disabled>사이즈 선택</option>
                    {
                        product?.size.map((sz,idx)=>(<option key={idx} >{sz}</option>))
                    }
                </select>
                <div className="addCart">추가</div>
            </Col>

        </Container>
    )
}