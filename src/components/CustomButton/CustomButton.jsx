import { CustomButtonContainer } from "./CustonButton.styles";

export default function CustomButton(props) {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
}
