import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
// import itemImage from "../../../assets/images/logoNavBar.png";
const classes = require("./Header.scss");
import buttonClasses from "./HeaderCartButton.scss";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> waiterLess </h1>
        {!props.isVendor && <HeaderCartButton onHit={props.onShowCart} />}
        <button className={buttonClasses.button} onClick={props.onLogout}>
          Logout
        </button>
      </header>
      {!props.isVendor && (
        <div className={classes["main-image"]}>
          <img src={itemImage} alt="delicious food" />
        </div>
      )}
    </Fragment>
  );
};

export default Header;
