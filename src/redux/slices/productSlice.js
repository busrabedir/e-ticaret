import { createSlice } from "@reduxjs/toolkit";
import { getCategoryProducts, getProducts } from "../actions";

const initialState = {
  isLoading: true,
  error: null,
  products: [],
  sort: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    });

    builder.addCase(getCategoryProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getCategoryProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    });
  },
});

export const { setSort } = productSlice.actions;

export default productSlice.reducer;
