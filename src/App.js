import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/Shop";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
