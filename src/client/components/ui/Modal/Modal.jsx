import React from "react";
import ReactDOM from "react-dom";
// import { useDispatch } from "react-redux";
// import { uiActions } from "../../../store/ui-slice";

import JRSButton from "../Button/JRSButton";
const classes = require("./Modal.scss");

const Modal = ({ title, onAccept, onCancel, className, children, ...rest }) => {
  // const dispatch = useDispatch();

  const onCancelHandler = (e) => {
    onCancel && onCancel(e);
    // dispatch(uiActions.closeAllOverlays());
  };

  const onAcceptHandler = (e) => {
    onAccept && onAccept(e);
    // dispatch(uiActions.closeAllOverlays());
  };

  return ReactDOM.createPortal(
    <div className={[classes.modal, className].join(" ")} {...rest}>
      <header className={classes["modal__header"]}>
        <h1>{title}</h1>
      </header>
      <div className={classes["modal__content"]}>{children}</div>
      <div className={classes["modal__actions"]}>
        <JRSButton onClick={onCancelHandler}>Cancel</JRSButton>
        <JRSButton onClick={onAcceptHandler}>Accept</JRSButton>
      </div>
    </div>,
    document.getElementById("overlays-root")
  );
};

export default Modal;
