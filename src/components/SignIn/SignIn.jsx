import { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { ButtonsContainer, SignInContainer, Title } from "./SignIn.styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userCredentials;
    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        {/* EMAIL */}

        <FormInput
          type="email"
          id="email"
          name="email"
          label="email"
          value={userCredentials.email}
          handleChange={handleChange}
          required
        />

        {/* PASSWORD */}

        <FormInput
          type="password"
          id="password"
          name="password"
          label="password"
          value={userCredentials.password}
          handleChange={handleChange}
          required
        />

        {/* SUBMIT BUTTON */}
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
