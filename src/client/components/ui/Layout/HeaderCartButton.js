import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../../pages/Client/Cart/CartIcon";
const classes = require("./HeaderCartButton.scss");
// import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHigh, setBtnHigh] = useState(false);
  // const context = useContext(CartContext);
  const { items } = context;

  const noOfItems = items.reduce((curNo, item) => {
    return curNo + item.quantity;
  }, 0);

  const btnClasses = `${classes.button} ${btnHigh ? classes.bump : ""}`;

  useEffect(() => {
    // if (context.items.length === 0) {
    //   return;
    // }

    setBtnHigh(true);

    const timer = setTimeout(() => {
      setBtnHigh(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onHit}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
