import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { uiSlice } from "./uiSlice";
import { userSlice } from "./userSlice";

export const createStore = () => {
  const store = configureStore({
    reducer: { user: userSlice.reducer, ui: uiSlice.reducer, cart: cartSlice.reducer },
  });
  return store;
};
