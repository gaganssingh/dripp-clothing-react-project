import "./SignIn.styles.scss";

import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

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

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      // EMPTY INPUT FIELDS
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
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
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              customClass="google-sign-in"
            >
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
