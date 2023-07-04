import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("action.payload:", action.payload);
      const { category, product } = action.payload;

      // Проверяем, есть ли уже товары из этой категории магазинов в корзине
      const existingCategory = state.products.find(
        (item) => item.category === category
      );

      if (existingCategory) {
        // Находим товар в категории и увеличиваем его количество
        const existingProduct = existingCategory.products.find(
          (item) => item._id === product._id
        );

        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          // Добавляем новый товар в категорию
          existingCategory.products.push({ ...product, quantity: 1 });
        }
      } else {
        // Создаем новую категорию и добавляем товар в нее
        state.products.push({
          category,
          products: [{ ...product, quantity: 1 }],
        });
      }

      state.total += product.price;
    },
    increaseQuantity: (state, action) => {
      console.log(action.payload);
      const { categoryIndex, productIndex } = action.payload;
      state.products[categoryIndex].products[productIndex].quantity += 1;
      state.total += state.products[categoryIndex].products[productIndex].price;
    },
    decreaseQuantity: (state, action) => {
      const { categoryIndex, productIndex } = action.payload;
      const product = state.products[categoryIndex].products[productIndex];
      if (product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price;
      } else {
        state.products[categoryIndex].products.splice(productIndex, 1);
        if (state.products[categoryIndex].products.length === 0) {
          state.products.splice(categoryIndex, 1);
        }
        state.total -= product.price;
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
