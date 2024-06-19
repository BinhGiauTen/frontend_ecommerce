import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const getUserFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
    user: getUserFromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user,thunkAPI) => {
    try {
      return await userService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
    "auth/login",
    async (user, thunkAPI) => {
      try {
        return await userService.login(user);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  
export const getUserProductWishlist = createAsyncThunk(
    "auth/wishlist",
    async (thunkAPI) => {
      try {
        return await userService.getUserWishlist();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.user = null;
      })
      .addCase(getUserProductWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProductWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.wishlist = action.payload;
      })
      .addCase(getUserProductWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default userSlice.reducer;

