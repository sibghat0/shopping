import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./signIn.css";
import { signInWithGoogle } from "../config/firebase";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          {/* <label>Email</label> */}
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            // placeholder="email"
            handleChange={this.handleChange}
            required
          />
          {/* <label>Password</label> */}
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            // placeholder="password"
            label="password"
            handleChange={this.handleChange}
            required
          />

          <div className="button">
            <CustomButton type="submit" childern="Sign In" />
            <CustomButton
              onClick={signInWithGoogle}
              childern="Sign In With Google"
              className="google-sign-in"
            />
          </div>
        </form>
      </div>
    );
  }
}
