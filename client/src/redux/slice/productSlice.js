import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { productService } from '../../api/axios/productrequests';

export const getAllProducts = createAsyncThunk('product/getAllProducts', async (thunkAPI) => {
    try {
        const response = await productService.getAllProducts();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getProduct = createAsyncThunk('product/getProduct', async (id, thunkAPI) => {
    try {
        const response = await productService.getProduct(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addToWishlist = createAsyncThunk('product/wishlist', async (productId, thunkAPI) => {
    try {
        const response = await productService.addToWishlist(productId);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const productState = {
    products: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const resetState = createAction('reset-all');

export const productSlice = createSlice({
    name: 'product',
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(addToWishlist.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.addToWishlist = action.payload;
                state.message = 'Product added to wishlist';
            })
            .addCase(addToWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            }).addCase(getProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.singleProd = action.payload;
                state.message = 'Product fetched successfully';
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default productSlice.reducer;
