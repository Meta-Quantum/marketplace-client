import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, { payload }) {
      state.notification = payload;
    },
    closeNotification(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;
