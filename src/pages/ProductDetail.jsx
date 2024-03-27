import {Col, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const ProductDetail = () => {
    let {id} = useParams();
    const [product, setProduct] = useState(null);
    const getItemDetail = async ()=>{
        let url = `https://my-json-server.typicode.com/leejeongsueng1/react-router-practice/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        getItemDetail();

    }, []);


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