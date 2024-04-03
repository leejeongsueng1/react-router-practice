import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

let initialState = {
    productList:[],
    product:null,
    isLoading: false,
    error: null
}

export const fetchProducts = createAsyncThunk('product/fetchAll',async (searchQuery, thunkAPI)=>{
    try{
        let url = `https://my-json-server.typicode.com/leejeongsueng1/react-router-practice/products?q=${searchQuery}`;
        let response = await fetch(url);
        return await response.json();
    }catch (err){
        thunkAPI.rejectWithValue(err.message);
    }

});

export const fetchProduct = createAsyncThunk('product/fetch', async (id,thunkAPI)=>{
    try{
        let url = `https://my-json-server.typicode.com/leejeongsueng1/react-router-practice/products/${id}`
        let response = await fetch(url);
        return await response.json();
    }catch (err){
        thunkAPI.rejectWithValue(err.message);
    }
})


const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=> {
        builder.addCase(fetchProducts.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled,(state, action)=>{
            state.isLoading = false;
            state.productList = action.payload;
        })
        .addCase(fetchProducts.rejected,(state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(fetchProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(fetchProduct.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.product = action.payload;
        })
        .addCase(fetchProduct.rejected,(state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const productActions = productSlice.actions;
export default productSlice.reducer;

