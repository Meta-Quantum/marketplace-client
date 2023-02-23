import React, { useState, useImperativeHandle, forwardRef, useRef } from "react";
const classes = require("./JRSSelect.scss");

const JRSSelect = forwardRef((props, ref) => {
  const {
    label,
    className,
    selectClassName,
    errorClassName,
    labelClassName,
    onChange,
    wasNotTriedToSubmit,
    errorMsg,
    selectOptions,
    defaultOption = { label: "--Please choose an option--", value: "" },
    ...rest
  } = props;

  const selectRef = useRef();
  const [selectValue, setSelectValue] = useState("");
  const [error, setError] = useState("NotValidated");

  const focus = () => {
    selectRef.current.focus();
  };

  const focusNotValidated = () => {
    if (!error) return false;
    selectRef.current.focus();
    return true;
  };

  const wasTouched = () => {
    !selectValue && setError(errorMsg);
  };

  useImperativeHandle(ref, () => {
    return {
      selectValue,
      error,
      focus,
      focusNotValidated,
      wasTouched,
    };
  });

  const onChangeHandler = (e) => {
    const {
      target: { value },
    } = e;
    onChange && onChange(e);
    value ? setError("") : setError(errorMsg);
    setSelectValue(value);
  };

  const selectIsInvalid = error && error !== "NotValidated" && !wasNotTriedToSubmit;

  return (
    <div className={[classes["jrs-select"], className, selectIsInvalid && classes["invalid"]].join(" ")}>
      {label && <label className={labelClassName}>{label}</label>}
      <select
        ref={selectRef}
        className={selectClassName}
        type="checkbox"
        onChange={onChangeHandler}
        onBlur={onChangeHandler}
        {...rest}
      >
        <option value={defaultOption.value}>{defaultOption.label}</option>
        {selectOptions.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectIsInvalid && <p className={[classes["error"], errorClassName].join(" ")}>{error}</p>}
    </div>
  );
});

export default JRSSelect;
