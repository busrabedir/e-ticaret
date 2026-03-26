import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../actions";

const initialState = {
  categories: [],
  selectedCategory: "",
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
