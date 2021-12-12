import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { SignInAndSignUpContainer } from "./SignInAndSignUp.styles";

export default function SignInAndSignUpPage() {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
}
