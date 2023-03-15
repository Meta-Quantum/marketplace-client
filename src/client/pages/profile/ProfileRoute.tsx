import { fetchCartData } from "../../../store/cartActions";
import { ProfilePage } from "./ProfilePage";

export const ProfileRoute = {
  type: "Profile",
  path: "/profile",
  component: ProfilePage,
  preload: (store: any) => {
    console.log("Load Data!");
    return store.dispatch(fetchCartData() as any);
  },
};
