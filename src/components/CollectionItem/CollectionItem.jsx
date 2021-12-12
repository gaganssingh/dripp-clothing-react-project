import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  AddToCartBtnContainer,
  CollectionFooterContainer,
  CollectionImageContainer,
  CollectionItemContainer,
} from "./CollectionItem.styles";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer className="collection-item">
      <CollectionImageContainer
        className="image"
        imageUrl={imageUrl}
      ></CollectionImageContainer>

      <CollectionFooterContainer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooterContainer>
      <AddToCartBtnContainer
        className="custom-button"
        inverted
        onClick={() => addItem(item)}
      >
        Add To Cart
      </AddToCartBtnContainer>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
