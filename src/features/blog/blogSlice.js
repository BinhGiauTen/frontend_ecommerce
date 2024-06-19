import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";


const initialState = {
    blogs: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };


export const getAllBlog = createAsyncThunk(
    "blog/get-all-blog",
    async ( thunkAPI) => {
      try {
        return await blogService.getBlogs();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const getaBlog = createAsyncThunk(
    "blog/get-a-blog",
    async (id, thunkAPI) => {
      try {
        return await blogService.getaBlog(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );



export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getAllBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getaBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getaBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogName = action.payload.title;
        state.blogDesc = action.payload.description;
        state.blogCategory = action.payload.category;
        state.blogImages = action.payload.images;
      })
      .addCase(getaBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
      
  },
});

export default blogSlice.reducer;

