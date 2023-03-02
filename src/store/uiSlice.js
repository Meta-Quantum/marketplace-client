import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, { payload }) {
      state.notification = {
        status: payload.status,
        title: payload.title,
        message: payload.message,
      };
    },
    closeNotification(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;
