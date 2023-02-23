import React, { useRef, useState } from "react";
// import { useHistory } from "react-router";
// import { useDispatch, useSelector } from "react-redux";

import JRSInput from "../ui/Input/JRSInput";
import JRSCheckbox from "../ui/Input/JRSCheckbox";
import JRSButton from "../ui/Button/JRSButton";
// import { VALIDATION_REGEXES } from "../../util/validators";
// import { loginHandler } from "../../store/user-actions";

const classes = require("./JRSSignInForm.scss");

const JRSSignInForm = () => {
  const { userId } = { userId: 1 };
  const dispatch = () => {};
  const history = () => {};

  const [wasSubmitted, setWasSubmitted] = useState(false);

  const emailRef = useRef();
  const passRef = useRef();

  const focusFirstInvalid = () => {
    if (emailRef.current.focusNotValidated()) return;
    passRef.current.focusNotValidated();
  };

  const onClickHandler = (e) => {
    if (wasSubmitted) return;
    // autovalidate inputs of interest if submitted without touch them
    emailRef.current.wasTouched();
    passRef.current.wasTouched();

    // focus 1st not validated input
    focusFirstInvalid();

    // check all inputs of interest before sending form data
    if (emailRef.current.error || passRef.current.error) return;

    // send data
    setWasSubmitted(true);
    dispatch(
      loginHandler({
        email: emailRef.current.inputValue,
        password: passRef.current.inputValue,
      })
    );

    // clear all inputs
    emailRef.current.clear();
    passRef.current.clear();

    // maybe a delay before push if doesn't work when BE support
    // if not succeded, let the user to try again
    setTimeout(() => {
      userId ? history.push("/user") : setWasSubmitted(false);
    }, [500]);
  };

  return (
    <div className={classes["jrs-form"]}>
      <JRSInput
        ref={emailRef}
        label="Email"
        type={"email"}
        validate={{
          required: "Email field can't be empty",
          // pattern: [VALIDATION_REGEXES.EMAIL, "Should be a valid email address"],
        }}
      />
      <JRSInput
        ref={passRef}
        label="Password"
        type={"password"}
        validate={{
          required: "Password field can't be empty",
        }}
      />
      <JRSButton btnYellow onClick={onClickHandler}>
        Log In
      </JRSButton>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        facebook<a href="#" className="fa fa-facebook"></a>
      </div>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        linkedin<a href="#" className="fa fa-linkedin"></a>
      </div>
      <div>
        <a href="https://orcid.org/0000-0001-5727-2427"></a>
      </div>
      orcid{" "}
      <img
        alt="ORCID logo"
        src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png"
        width="24"
        height="24"
      />
    </div>
  );
};

export default JRSSignInForm;
