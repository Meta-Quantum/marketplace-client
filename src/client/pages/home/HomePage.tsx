import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCartData, sendCartData } from "../../../store/cartActions";
import { uiActions } from "../../../store/uiSlice";
import { userActions } from "../../../store/userSlice";
import JRSCheckbox from "../../components/Input/JRSCheckbox";
import JRSInput from "../../components/Input/JRSInput";
import JRSSelect from "../../components/Input/JRSSelect";

import bla from "./bla.png";
import ktk from "./kTk.jpg";

const HomePage = () => {
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
        href="/profile"
        onClick={(e) => {
          e.preventDefault();
          navigate("/profile", {});
        }}
      >
        Profile
      </a>
      <JRSInput />
      <JRSCheckbox />
      <JRSSelect />
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
      <button
        onClick={() => {
          console.log("Bye NFT Launchpad");
          dispatch(fetchCartData() as any);
          dispatch(userActions.logOut());
        }}
      >
        Don't Press Me! {isAuth}
      </button>
      <br />
      <img style={{ height: 256, width: "auto", display: "inline-block" }} src={bla} alt="KTKfeetContest.jpg" />
      <img style={{ height: 256, width: "auto", display: "inline-block" }} src={ktk} alt="KTKfeetContest.jpg" />
      <h2>Durotan</h2>
    </div>
  );
};

export { HomePage };
