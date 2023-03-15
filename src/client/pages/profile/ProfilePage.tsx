import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCartData, sendCartData } from "../../../store/cartActions";
import { uiActions } from "../../../store/uiSlice";
import { userActions } from "../../../store/userSlice";
import JRSInput from "../../components/Input/JRSInput";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { notification, cartIsVisible } = useSelector((state) => (state as any).ui);
  const { userName, isAuth } = useSelector((state) => (state as any).user);
  const navigate = useNavigate();

  console.log({ notification, cartIsVisible });

  return (
    <div>
      <button
        onClick={() => {
          console.log("Wow NFT Launchpad");
          dispatch(uiActions.toggle());
        }}
      >
        Press Me! {cartIsVisible}
      </button>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigate("/", {});
        }}
      >
        Home
      </a>
      {notification && (
        <>
          <h2>{notification.title}</h2>
          <h4>{notification.status}</h4>
          <p>{notification.message}</p>
        </>
      )}
      <h1> Hello NFT Launchpad </h1>
      <button
        onClick={() => {
          console.log("Hello NFT Launchpad");
          dispatch(sendCartData({ items: undefined, totalQuantity: undefined }) as any);
          dispatch(userActions.logIn({ userName: "DD & CO" }));
        }}
      >
        Press Me! {userName}
      </button>
      <h3> DD & CO </h3>
      <JRSInput />
      <button
        onClick={() => {
          console.log("Bye NFT Launchpad");
          dispatch(fetchCartData() as any);
          dispatch(userActions.logOut());
        }}
      >
        Don't Press Me!
      </button>
    </div>
  );
};

export { ProfilePage };
