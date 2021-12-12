import { CartItemContainer, ItemDetailsContainer } from "./CartItem.styles";

export default function CartItem({
  item: { imageUrl, price, name, quantity },
}) {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailsContainer className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}
