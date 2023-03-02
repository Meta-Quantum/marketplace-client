import { createSlice } from "@reduxjs/toolkit";

const initialState = { userName: "Guest User", isAuth: false };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    singUp(state, { payload }) {
      // TO DO
      state.userName = payload.userName;
      state.isAuth = true;
    },
    logIn(state, { payload }) {
      // TO DO
      state.userName = payload.userName;
      state.isAuth = true;
    },
    logOut(state) {
      // TO DO
      state.userName = "Guest User";
      state.isAuth = false;
    },
  },
});

export const userActions = userSlice.actions;
