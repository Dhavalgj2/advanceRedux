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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://foodorderhttps-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Something wrong while sending the Data!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        showNotification({
          title: "success",
          message: "sent cart data",
          status: "success!",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          title: "error!",
          message: "Sending Cart Data failed",
          status: "error",
        })
      );
    }
  };
};
export const cartReducer = cartSlice.reducer;

export const { toggle, showNotification } = cartSlice.actions;
