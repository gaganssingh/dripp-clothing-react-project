import "./SignIn.styles.scss";

import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          {/* EMAIL */}

          <FormInput
            type="email"
            id="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          {/* PASSWORD */}

          <FormInput
            type="password"
            id="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          {/* SUBMIT BUTTON */}

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
