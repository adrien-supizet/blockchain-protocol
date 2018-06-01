import React, { Component } from "react";
import "./App.css";
import SignUpControl from "./components/Account/SignUpControl";
import WalletControl from "./components/Wallet/WalletControl";
import LogIn from "./components/Account/LogIn";
import CreateAccount from "./components/Account/CreateAccount";
import firebase from "./firebase.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: "",
      isLoggedIn: false
    };
  }

  componentDidMount() {
    const rootRef = firebase
      .database()
      .ref()
      .child("react");
    const UsersRef = rootRef.child("users");
    UsersRef.on("value", snapshot => {
      this.setState({
        users: snapshot.val()
      });
    });
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({
          isLoggedIn: true
        });
      } else
        this.setState({
          isLoggedIn: false
        });
      console.log(JSON.stringify(firebaseUser) + " is now connected.");
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <SignUpControl className="SignControl" users={this.state.users} />
            )}
          >
            <Redirect from="/" to="/signup" />
            <Route exact path="/login" component={LogIn} />
            <Route path="/signup" component={CreateAccount} />
          </Route>
          <Route path="/a" component={WalletControl} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
