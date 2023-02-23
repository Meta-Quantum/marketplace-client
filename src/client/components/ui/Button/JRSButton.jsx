import React, { forwardRef, useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { unstable_HistoryRouter, useLocation } from "react-router-dom";
// import { uiActions } from "../../../store/ui-slice";
import SvgIcon from "../SvgIcon/SvgIcon";

const classes = require("./JRSButton.scss");

// if not a relative path - aka external url
const absolute = /^https?:\/\//i;
const hashnav = "#";

const IsToGood = (to) => to && !to.includes(hashnav);
const IsToTrigger = (to) => to && (to.includes("tel:") || to.includes("mailto:"));

export const JRS_BTN_DELAYS = {
  HAS_ONCLICK: 150,
  NO_ONCLICK: 50,
};

const JRSButton = forwardRef(
  (
    {
      children,

      to = "",

      skipNavigation = false,
      hideAllPanels = true,
      hideAllToasts = true,
      disableHtmlTitle = false,

      label,
      iconComponent,
      iconSize = { width: 24, height: 24 },
      iconClassName = "",

      uppercase,
      disabled,
      dontShowDisabledColor,

      onClick,
      onNavigated,

      className,
      selectForLocation = false,

      btnYellow = false,
      btnYellowNarrow = false,
      btnBlack = false,
      btnBlackGray = false,
      btnGray = false,
      btnGrayDark = false,
      btnDarkgray = false,

      showUnderline = false,
      underlineHover = false,

      newTab,
      ...rest
    },
    ref
  ) => {
    const { pathname, search = "" } = useLocation();
    const history = () => {};
    const dispatch = () => {};

    const currentPath = `${pathname}${search.length ? search : ""}`;

    const [goodTo, setGoodTo] = useState(() => IsToGood(to));

    // const networkState = useNetwork();

    useEffect(() => {
      setGoodTo(IsToGood(to));
    }, [to]);

    async function onClickHandler(e) {
      if (disabled) {
        return;
      }

      // if (hideAllPanels === true) {
      // }
      // if (hideAllToasts === true) {
      // }

      onClick && onClick(e);

      // ensure onClick is fired before to
      if (goodTo) {
        /**
         *
         * open in new tab || trigger tel:/ mailto:
         */
        if (IsToTrigger(to)) {
          window.open(to, "_self");
          return;
        } else if (newTab) {
          e.preventDefault();
          window.open(to, "_blank");
          return;
        } else if (absolute.test(to) || e.ctrlKey || e.metaKey) {
          // if user tries to open in another tab, or if url is absolute (external)
          return;
        }

        // if url is a SPA url, skip browser functions
        e.preventDefault();
        e.stopPropagation();

        /**
         *
         * navigate after a timeout
         * so that we give a few ms of React re-render processing time to onClick and the methods above
        //  **/
        // if (networkState.online === false) {
        //   return;
        // }

        setTimeout(
          async () => {
            if (!skipNavigation) {
              // if the current path and the one that the user is trying to navigate to are the same, don't go through the Router

              const cPath = pathname || "/";
              to !== cPath && (await history.push(to));

              // after the navigation is done, callback
              onNavigated && onNavigated(e);
            }
          },
          onClick ? JRS_BTN_DELAYS.HAS_ONCLICK : JRS_BTN_DELAYS.NO_ONCLICK
        );
      }

      if (to === null) {
        // TODO different way to show msg "Currently unavailable."
        dispatch();
        // uiActions.showNotification({
        //   status: "error",
        //   title: "Currently unavailable.",
        //   message: "Cause of various reasons the path is missing",
        // })
      }
    }

    const appliedClasses = [
      className,
      classes[`.jrs-btn`],
      selectForLocation && currentPath === to && classes["selected"],
      showUnderline && classes["underline"],
      underlineHover && classes["underline-hover"],
      (btnYellow || btnBlack || btnBlackGray || btnGray || btnGrayDark || btnDarkgray) && classes["btn"],
      btnYellow && classes["btn-yellow"],
      btnYellowNarrow && classes["btn-yellow-narrow"],
      btnBlack && classes["btn-black"],
      btnBlackGray && classes["btn-black-gray"],
      btnGray && classes["btn-gray"],
      btnGrayDark && classes["btn-gray-dark"],
      btnDarkgray && classes["btn-darkgray"],
      uppercase && classes["uppercase"],
      !dontShowDisabledColor && disabled && classes["disabled"],
      !!iconComponent && classes["withIcon"],
    ].join(" ");

    return (
      <ContainerElement
        to={to}
        {...(to === "" || disabled ? {} : { href: to })}
        className={appliedClasses}
        onClick={onClickHandler}
        ref={ref}
        disabled={disabled}
        label={label}
        disableHtmlTitle={disableHtmlTitle}
        {...rest}
      >
        {iconComponent && (
          <SvgIcon component={iconComponent} {...iconSize} className={[classes["icons"], iconClassName].join(" ")} />
        )}
        {label && label}
        {children && children}
      </ContainerElement>
    );
  }
);

const ContainerElement = forwardRef(({ to, children, draggable, title, disableHtmlTitle, label, ...rest }, ref) => {
  return to ? (
    <a ref={ref} draggable={draggable} title={disableHtmlTitle ? null : title || label} {...rest}>
      {children}
    </a>
  ) : (
    <button ref={ref} title={disableHtmlTitle ? null : title || label} {...rest}>
      {children}
    </button>
  );
});

export default JRSButton;
