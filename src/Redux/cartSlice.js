import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload
      );
      if (product) {
        product.quantity += 1;
        state.total += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.total -= product.price;
        } else {
          state.products.splice(productIndex, 1);
          state.total -= product.price;
        }
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
