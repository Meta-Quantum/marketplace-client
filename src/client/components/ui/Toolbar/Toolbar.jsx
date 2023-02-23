import React from "react";

const classes = require("./Toolbar.scss");

const Toolbar = (props) => <div className={classes.toolbar}>{props.children}</div>;

export default Toolbar;
