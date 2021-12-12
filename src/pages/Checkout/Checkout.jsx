import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeButton/StripeButton";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlock,
  TestCCBlock,
  TotalContainer,
} from "./Checkout.styles";

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutPageContainer>
      {/* Checkout Headers */}
      <CheckoutHeaderContainer>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Desctiption</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeaderContainer>

      {/* Cart items mapped to checkout items */}
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer>
        <span>TOTAL: ${totalPrice}</span>
      </TotalContainer>
      <TestCCBlock>
        ***TEST CREDIT CARD***
        <br />
        4242 4242 4242 4242 | Expiry: 01/23 | CVV: 123
      </TestCCBlock>
      <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
