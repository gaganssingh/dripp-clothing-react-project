import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartItem from "../CartItem/CartItem";

import {
  CartDropdownContainer,
  CartEmptyMessage,
  CartItemsContainer,
  CheckoutNowButton,
} from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const handleCheckoutButtonClick = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <CartEmptyMessage className="empty-message">
            Cart is empty
          </CartEmptyMessage>
        )}
      </CartItemsContainer>
      <CheckoutNowButton onClick={handleCheckoutButtonClick}>
        Checkout Now
      </CheckoutNowButton>
    </CartDropdownContainer>
  );
};

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
