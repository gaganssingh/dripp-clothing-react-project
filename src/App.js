import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { auth } from "./firebase/firebase.utils";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/SignInAndSignUp";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  render() {
    console.log(auth);
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
