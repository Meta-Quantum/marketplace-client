import React, { useState, useImperativeHandle, forwardRef, useRef } from "react";
const classes = require("./JRSCheckbox.scss");

const JRSCheckbox = forwardRef((props, ref) => {
  const {
    label,
    className,
    checkboxClassName,
    errorClassName,
    labelClassName,
    onChange,
    wasNotTriedToSubmit,
    errorMsg,
    ...rest
  } = props;

  const checkboxRef = useRef();
  const [error, setError] = useState("NotValidated");

  const focus = () => {
    checkboxRef.current.focus();
  };

  const focusNotValidated = () => {
    if (!error) return false;
    checkboxRef.current.focus();
    return true;
  };

  const wasTouched = () => {
    !checkboxRef.current.checked && setError(errorMsg);
  };

  useImperativeHandle(ref, () => {
    return {
      error,
      focus,
      focusNotValidated,
      wasTouched,
    };
  });

  const onChangeHandler = (e) => {
    onChange && onChange(e);
    e.target.checked ? setError("") : setError(errorMsg);
  };

  const checkboxIsInvalid = error && error !== "NotValidated" && !wasNotTriedToSubmit;

  return (
    <div className={[classes["jrs-checkbox"], className, checkboxIsInvalid && classes["invalid"]].join(" ")}>
      {label && <label className={labelClassName}>{label}</label>}
      <input ref={checkboxRef} className={checkboxClassName} type="checkbox" onChange={onChangeHandler} {...rest} />
      {checkboxIsInvalid && <p className={[classes["error"], errorClassName].join(" ")}>{error}</p>}
    </div>
  );
});

export default JRSCheckbox;
