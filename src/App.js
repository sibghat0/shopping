import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./layout/pages/homepage/homepage";
import Shop from "./layout/pages/shop/shop";
import Header from "./layout/components/header/header";
import Sign from "./layout/pages/signIn-signUp/signIn-signUp";
import {
  auth,
  createUserProfileDocument,
} from "../src/layout/components/config/firebase";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unSubscriseFromAuth = null;

  componentDidMount() {
    this.unSubscriseFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef);
        userRef.onSnapshot((snap) => {
          this.setState({
            currentUser: {
              id: snap.id,
              ...snap.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscriseFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/Sign" component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
