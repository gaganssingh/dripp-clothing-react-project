import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./Checkout.styles.scss";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Desctiption</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);