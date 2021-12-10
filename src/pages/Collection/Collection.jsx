import { connect } from "react-redux";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./Collection.styles.scss";

function CollectionPage({ collection }) {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>collection page</h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
