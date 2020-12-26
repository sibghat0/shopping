import React from "react";
import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/signIn/signIn";
import "./signIn-signUp.css";

const Sign = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
export default Sign;
