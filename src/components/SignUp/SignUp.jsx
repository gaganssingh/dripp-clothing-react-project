import { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { SignUpContainer, Title } from "./SignUp.styles";

const SignUp = ({ signUpStart }) => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userInfo;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <SignUpContainer>
      <Title>I do not have an account</Title>
      <span>Sign up with email and password</span>

      {/* SIGN UP FORM */}
      <form className="sign-up-form" onSubmit={handleSubmit}>
        {/* DISPLAY NAME INPUT */}
        <FormInput
          type="text"
          name="displayName"
          value={userInfo.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        {/* EMAIL INPUT */}
        <FormInput
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          label="Email"
          required
        />

        {/* PASSWORD INPUT */}
        <FormInput
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
          label="Password"
          required
        />
        {/* CONFIRM PASSWORD INPUT */}
        <FormInput
          type="password"
          name="confirmPassword"
          value={userInfo.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
