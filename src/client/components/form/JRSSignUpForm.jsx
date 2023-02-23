import React, { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";

import JRSInput from "../ui/Input/JRSInput";
import JRSSelect from "../ui/Input/JRSSelect";
import JRSCheckbox from "../ui/Input/JRSCheckbox";
import JRSButton from "../ui/Button/JRSButton";
// import { signupHandler } from "../../store/user-actions";
// import { VALIDATION_REGEXES } from "../../util/validators";

const classes = require("./JRSSignUpForm.scss");

const JRSSignUpForm = () => {
  const { userId } = { userId: 1 };
  const dispatch = () => {};
  const history = () => {};

  const [wasSubmitted, setWasSubmitted] = useState(false);

  const titleRef = useRef();
  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const passConfirmRef = useRef();
  const agreeTermsRef = useRef();

  const focusFirstInvalid = () => {
    if (titleRef.current.focusNotValidated()) return;
    if (fNameRef.current.focusNotValidated()) return;
    if (lNameRef.current.focusNotValidated()) return;
    if (emailRef.current.focusNotValidated()) return;
    if (passRef.current.focusNotValidated()) return;
    if (passConfirmRef.current.focusNotValidated()) return;
    agreeTermsRef.current.focusNotValidated();
  };

  const onClickHandler = (e) => {
    if (wasSubmitted) return;
    // autovalidate inputs of interest if submitted without touch them
    titleRef.current.wasTouched();
    fNameRef.current.wasTouched();
    lNameRef.current.wasTouched();
    emailRef.current.wasTouched();
    passRef.current.wasTouched();
    passConfirmRef.current.wasTouched();
    agreeTermsRef.current.wasTouched();

    // focus 1st not validated input
    focusFirstInvalid();

    // check all inputs of interest before sending form data
    if (
      titleRef.current.error ||
      fNameRef.current.error ||
      lNameRef.current.error ||
      emailRef.current.error ||
      passRef.current.error ||
      passConfirmRef.current.error ||
      agreeTermsRef.current.error
    )
      return;

    setWasSubmitted(true);
    // send data
    dispatch(
      signupHandler({
        title: titleRef.current.inputValue,
        fName: fNameRef.current.inputValue,
        lName: lNameRef.current.inputValue,
        email: emailRef.current.inputValue,
        password: passRef.current.inputValue,
        roles: ["billionaire", "awesome guy"],
      })
    );

    // clear all inputs
    // titleRef.current.clear(); // TO DO clear for JRSSelect
    fNameRef.current.clear();
    lNameRef.current.clear();
    emailRef.current.clear();
    passRef.current.clear();
    passConfirmRef.current.clear();

    // maybe a delay before push if doesn't work when BE support
    // if not succeded, let the user to try again
    setTimeout(() => {
      userId ? history.push("/user") : setWasSubmitted(false);
    }, [500]);
  };

  return (
    <div className={classes["jrs-form"]}>
      <JRSSelect
        ref={titleRef}
        label="Title"
        selectOptions={[
          { label: "Mr.", value: 1 },
          { label: "Mrs.", value: 2 },
          { label: "Dr.", value: 3 },
          { label: "Prof.", value: 4 },
        ]}
        errorMsg="You should choose a title"
      />
      <JRSInput
        ref={fNameRef}
        label="First Name"
        validate={{
          required: "First Name field can't be empty",
          // pattern: [VALIDATION_REGEXES.NAME, "Should be a valid capitalized name, without special chars"],
        }}
      />
      <JRSInput
        ref={lNameRef}
        label="Last Name"
        validate={{
          required: "Last Name field can't be empty",
          // pattern: [VALIDATION_REGEXES.NAME, "Should be a valid capitalized name, without special chars"],
        }}
      />
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
          // pattern: [VALIDATION_REGEXES.PASSWORD, "Password field should meet requirements"],
        }}
        passwordHelper={[
          [/^(?=(.*[a-z]){3,})/, "min 3 lowercase letters"],
          [/(?=(.*[A-Z]){2,})/, "min 2 uppercase letters"],
          [/(?=(.*[!@#$%^&*()\-__+.]){3,})/, "min 3 special chars"],
          [/(?=(.*[0-9]){3,})/, "min 3 digits"],
          [/.{11,}$/, "min 11 chars"],
        ]}
      />
      <JRSInput
        ref={passConfirmRef}
        label="Confirm Password"
        type={"password"}
        validate={{
          required: "Password confirmation field can't be empty",
          match: [(value) => value === passRef.current.inputValue, "Password fields should match"],
        }}
      />
      <JRSCheckbox ref={agreeTermsRef} label="End user license agreement" errorMsg="You should agree with terms." />
      <JRSButton btnYellow onClick={onClickHandler}>
        Sing Up
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

export default JRSSignUpForm;
