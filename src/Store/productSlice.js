import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItems.quantity++;
        existingItems.totalPrice = existingItems.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItems.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItems.quantity--;
      }
    },
  },
});

export const productSliceReducer = productSlice.reducer;

export const { addItemToCart, removeItem } = productSlice.actions;
