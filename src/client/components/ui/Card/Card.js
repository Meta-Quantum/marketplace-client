import React from "react";
const classes = require("./Card.scss");

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
