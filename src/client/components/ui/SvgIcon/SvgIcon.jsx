import React from "react";
const classes = require("./SvgIcon.scss");

// export interface ISvgIconProps {
//   component: React.FunctionComponent<any>;
//   size?: any;
//   className?: string;
//   color?: string;
//   viewBox?: string;
//   children?: string;
//   width?: any;
//   height?: any;
//   onClick?: () => any;
// }

const SvgIcon = (props) => {
  const { className, size = "1rem", color, component: Component, children, onClick, ...other } = props;

  const defaultSvgProps = {
    width: props.width || size || "auto",
    focusable: false,
    className,
    onClick,
    height: props.height || "100%",
    ...other,
  };

  return (
    <Component {...defaultSvgProps} className={[classes["style-defaults"], className].join(" ")}>
      {children}
    </Component>
  );
};

export default SvgIcon;
