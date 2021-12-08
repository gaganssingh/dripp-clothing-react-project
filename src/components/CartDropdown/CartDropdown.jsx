import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.styles.scss";

export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Checkout</CustomButton>
    </div>
  );
}
