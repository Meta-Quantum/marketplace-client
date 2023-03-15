import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("api-link");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      console.log("Initiated...");
      const { items, totalQuantity } = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: items || [],
          totalQuantity,
        })
      );
      console.log("Success!");
    } catch (error) {
      console.log({
        status: "error",
        title: "Error!",
        message: "Fetching cart data failed!",
      });
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = ({ items, totalQuantity }) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch("api-link", {
        method: "PUT",
        body: JSON.stringify({
          items,
          totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
