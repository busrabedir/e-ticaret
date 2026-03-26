import { createSlice } from "@reduxjs/toolkit";
import { getDetailProduct } from "../actions";

const initialState = {
  isLoading: true,
  error: null,
  productDetail: null,
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailProduct.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getDetailProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getDetailProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.productDetail = action.payload;
    });
  },
});

export default detailSlice.reducer;
