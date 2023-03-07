import React, { useState, useImperativeHandle, forwardRef, useRef } from "react";
import classes from "./JRSInput.scss";
console.log(JSON.stringify({ classes }));
console.log(classes);
console.log(classes.error);
const JRSInput = forwardRef((props, ref) => {
  const {
    type,
    label,
    className,
    inputClassName,
    errorClassName,
    labelClassName,
    onChange,
    onBlur,
    onFocus,
    validationDelay = 500,
    validate,
    wasNotTriedToSubmit,
    passwordHelper,
    ...rest
  } = props;

  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [inputTimer, setInputTimer] = useState();
  const [error, setError] = useState("NotValidated");
  const [isFocused, setIsFocused] = useState();

  const focus = () => {
    inputRef.current.focus();
  };

  const focusNotValidated = () => {
    if (!error) return false;
    inputRef.current.focus();
    return true;
  };

  const handleValidation = (value) => {
    if (!validate) return;
    if (validate.required && value.trim() === "") {
      setError(validate.required);
      return;
    }

    if (validate.pattern && value.length > 0 && !validate.pattern[0].test(value)) {
      setError(validate.pattern[1]);
      return;
    }

    if (validate.match && value.length > 0 && !validate.match[0](value)) {
      setError(validate.match[1]);
      return;
    }

    setError("");
  };

  const wasTouched = () => {
    inputValue ? handleValidation(inputValue) : handleValidation("");
  };

  const clear = () => {
    setInputValue("");
    setError("NotValidated");
  };

  useImperativeHandle(ref, () => {
    return {
      inputValue,
      error,
      focus,
      focusNotValidated,
      wasTouched,
      clear,
    };
  });

  const onBlurHandler = (e) => {
    const {
      target: { value },
    } = e;
    onBlur && onBlur(e);
    setInputValue(value);
    handleValidation(value);
    setIsFocused(false);
  };

  const onFocusHandler = (e) => {
    onFocus && onFocus(e);
    setIsFocused(true);
  };

  const inputIsInvalid = error && error !== "NotValidated" && !wasNotTriedToSubmit;

  const onChangeHandler = (e) => {
    const {
      target: { value },
    } = e;
    clearInterval(inputTimer);
    onChange && onChange(e);
    setInputValue(value);
    inputIsInvalid
      ? handleValidation(value)
      : setInputTimer(
          setTimeout(() => {
            handleValidation(value);
          }, validationDelay)
        );
  };

  return (
    <div className={`${classes["jrs-input"]} ${className} ${inputIsInvalid && classes["invalid"]}`}>
      {label && <label className={labelClassName}>{label}</label>}
      <input
        ref={inputRef}
        className={inputClassName}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        type={type || "text"}
        value={inputValue}
        {...rest}
      />
      {inputIsInvalid && <p className={[classes["error"], errorClassName].join(" ")}>{error}</p>}
      {passwordHelper && isFocused && (
        <div className={classes["tooltip"]}>
          <ul>
            {passwordHelper.map((item, index) => {
              const error = !item[0].test(inputValue);
              return (
                <li key={index} className={[classes["element"], error && classes["not-checked"]].join(" ")}>
                  {error ? <p>&#10060;</p> : <p>&#x2705;</p>} <p>{item[1]}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
});

export default JRSInput;
