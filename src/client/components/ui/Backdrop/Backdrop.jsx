import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

const classes = require("./Backdrop.scss");

const Backdrop = ({ onClick, className, disableClose, ...rest }) => {
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    onClick && onClick(e);
    // !disableClose && dispatch(uiActions.closeAllOverlays());
  };
  return ReactDOM.createPortal(
    <div className={[classes.backdrop, className].join(" ")} onClick={onClickHandler} {...rest} />,
    document.getElementById("overlays-root")
  );
};

export default Backdrop;
