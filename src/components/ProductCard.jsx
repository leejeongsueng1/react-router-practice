export const ProductCard = ({item}) => {
    return (
        <div className="product">
            <img src={item?.img} />
            <div>Conscious Choice</div>
            <div>{item?.title}</div>
            <div>\{item?.price}</div>
            <div>{item?.new === true ? "신제품" : ""}</div>
        </div>
    )
}