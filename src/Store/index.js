import { configureStore } from "@reduxjs/toolkit";
import { productSliceReducer } from "./productSlice";
import { cartReducer } from "./cartSlice";

const store = configureStore({
  reducer: { product: productSliceReducer, cart: cartReducer },
});

export default store;
