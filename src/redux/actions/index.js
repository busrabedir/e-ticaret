import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getCategories = createAsyncThunk("category", async () => {
  const res = await api.get("/products/categories");

  return res.data;
});

export const getProducts = createAsyncThunk("getProducts", async () => {
  const res = await api.get("/products");

  return res.data;
});

export const getDetailProduct = createAsyncThunk("getProduct", async (id) => {
  const res = await api.get(`/products/${id}`);

  return res.data;
});

export const getCategoryProducts = createAsyncThunk(
  "getCategoryProduct",
  async (category) => {
    const res = await api.get(`/products/category/${category}`);

    return res.data;
  },
);
