import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
