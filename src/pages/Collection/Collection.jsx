import { connect } from "react-redux";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selectors";
import {
  CollectionPageContainer,
  ItemsContainer,
  Title,
} from "./Collection.styles";

function CollectionPage({ collection }) {
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
