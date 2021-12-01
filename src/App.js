import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/Shop";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
