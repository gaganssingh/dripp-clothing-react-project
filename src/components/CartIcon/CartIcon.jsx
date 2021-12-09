import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./CartIcon.styles.scss";

function CartIcon({ toggleCartHidden, totalItemsInCart }) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{totalItemsInCart}</span>
    </div>
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
