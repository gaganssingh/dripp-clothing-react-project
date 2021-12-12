import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";
import {
  CheckoutImageContainer,
  CheckoutItemContainer,
  NameAndPriceContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={name} />
      </CheckoutImageContainer>
      <NameAndPriceContainer>{name}</NameAndPriceContainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <NameAndPriceContainer>${price}</NameAndPriceContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
