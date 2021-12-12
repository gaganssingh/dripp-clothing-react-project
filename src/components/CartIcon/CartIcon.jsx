import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIcon,
} from "./CartIcon.styles";

function CartIcon({ toggleCartHidden, totalItemsInCart }) {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{totalItemsInCart}</ItemCountContainer>
    </CartIconContainer>
  );
}

// const mapStateToProps = (state) => ({
//   totalItemsInCart: selectCartItemsCount(state),
// });
const mapStateToProps = createStructuredSelector({
  totalItemsInCart: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
