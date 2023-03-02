import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, { payload }) {
      const existingItem = state.items.find((item) => item.id == payload.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) state.items.push({ id: payload.id, price: payload.price, quantity: 1, title: payload.title });
      else {
        existingItem.quantity++;
        existingItem.totalPrice += payload.price;
      }
    },
    remove(state, { payload }) {
      const existingItem = state.items.find((item) => item.id == payload);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity == 1) state.items = state.items.filter((item) => item.id !== payload);
      else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    updateCart(state, { payload }) {
      // TO DO
    },
  },
});

export const cartActions = cartSlice.actions;
