// import { useDispatch } from "react-redux";

import React from "react";

// import { uiActions } from "../../../store/ui-slice";
const classes = require("./Notification.scss");

const Notification = (props) => {
  // const dispatch = useDispatch();

  const onCloseHandler = () => {
    // dispatch(uiActions.closeNotification());
  };

  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <button className={classes.button} onClick={onCloseHandler}>
        Close
      </button>
    </section>
  );
};

export default Notification;
