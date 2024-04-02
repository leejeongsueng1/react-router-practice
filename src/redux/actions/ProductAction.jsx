
function getProducts(searchQuery){

    // 항상 함수를 리턴하고
    // 함수는 2개의 파라미터가 있음, dispatch, getstate
    return async (dispatch, getState)=>{
        let url = `https://my-json-server.typicode.com/leejeongsueng1/react-router-practice/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_SUCCESS" ,payload:{data}});
    };
}

function getProduct(id){
    return async (dispatch,getState) => {
        let url = `https://my-json-server.typicode.com/leejeongsueng1/react-router-practice/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        dispatch({type:"GET_PRODUCT_DETAIL", payload:{data}});
    }

}

export const productAction = {getProducts,getProduct}