import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (!product?.id) return;

      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload.id;
      state.cart = state.cart.filter((item) => item.id !== id);
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
