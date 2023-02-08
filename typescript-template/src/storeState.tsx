import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./features/reducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo"),
    //   ? JSON.parse(localStorage.getItem("userInfo"))
    //   : null,
  },
};

export type RootState = ReturnType<typeof storeState.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeState.dispatch;

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const storeState = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default storeState;
