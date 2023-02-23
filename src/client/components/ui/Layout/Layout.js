import React from "react";

const classes = require("./Layout.scss");

const Layout = (props) => (
  <>
    {/* <p>Breadcrumbs</p> */}
    <main className={classes.content}>{props.children}</main>
  </>
);

export default Layout;
