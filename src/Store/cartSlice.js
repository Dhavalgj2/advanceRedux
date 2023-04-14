import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isShown: false, notification: null },
  reducers: {
    toggle(state, action) {
      state.isShown = !state.isShown;
    },
    showNotification(state, action) {
      state.notification = {
        state: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { toggle, showNotification } = cartSlice.actions;
