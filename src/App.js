import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./layout/pages/homepage/homepage";
import Shop from "./layout/pages/shop/shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Shop exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
