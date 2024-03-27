import {useNavigate} from "react-router-dom";

export const ProductCard = ({item}) => {

    const navigator = useNavigate();
    const showDetail = ()=>{
        navigator(`/product/${item?.id}`);
    }

    return (
        <div className="product" onClick={showDetail}>
            <img src={item?.img} alt="no images" />
            <div>Conscious Choice</div>
            <div>{item?.title}</div>
            <div>\{item?.price}</div>
            <div>{item?.new === true ? "신제품" : ""}</div>
        </div>
    )
}