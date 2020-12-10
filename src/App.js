import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./layout/pages/homepage/homepage";

const Hatpage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route excat path="/Hats" component={Hatpage} />
      </Switch>
    </div>
  );
}

export default App;
