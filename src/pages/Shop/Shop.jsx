import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          path={`${match.path}`}
          exact
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: (item) => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
