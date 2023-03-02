import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { uiSlice } from "./uiSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: { user: userSlice.reducer, ui: uiSlice.reducer, cart: cartSlice.reducer },
});
