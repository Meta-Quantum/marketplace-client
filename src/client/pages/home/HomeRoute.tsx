import { fetchCartData } from "../../../store/cartActions";
import { HomePage } from "./HomePage";

export const HomeRoute = {
  type: "Home",
  path: "/",
  component: HomePage,
  preload: (store: any) => {
    console.log("Load Data!");
    return store.dispatch(fetchCartData() as any);
  },
};
