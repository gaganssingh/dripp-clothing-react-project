import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection";

function Shop({ match }) {
  return (
    <div className="shop-page">
      <Route path={`${match.path}`} exact component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default Shop;
