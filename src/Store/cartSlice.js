import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isShown: false },
  reducers: {
    toggle(state, action) {
      state.isShown = !state.isShown;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { toggle } = cartSlice.actions;
