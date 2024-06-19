import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";


const initialState = {
    products: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };


export const getAllProduct = createAsyncThunk(
    "product/get-all-product",
    async ( thunkAPI) => {
      try {
        return await productService.getProducts();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const addToWishlist = createAsyncThunk(
    "product/add-to-wishlist",
    async ( proId,thunkAPI) => {
      try {
        return await productService.addToWishList(proId);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
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
        state.message = "Product Added to Wishlist";
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
  },
});

export default productSlice.reducer;

