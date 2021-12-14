import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/SignInAndSignUp";
import CheckoutPage from "./pages/Checkout/Checkout";
import "./App.css";

// SEED SHOP DATA TO FIREBASE
// import { addCollectionAndDocuments } from "./firebase/firebase.utils";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();

    // // SEED SHOP DATA TO FIREBASE
    // addCollectionAndDocuments(
    //   "collections",
    //   this.props.collectionsArray.map(({ title, items }) => ({ title, items }))
    // );
    // });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route
            path="/signin"
            exact
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = ({ user: { currentUser } }) => ({
//   currentUser,
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview, // SEED SHOP DATA TO FIREBASE
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
