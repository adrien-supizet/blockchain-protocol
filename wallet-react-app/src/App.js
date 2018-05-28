import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/Account/SignUp";
import firebase from "./firebase.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: ""
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
        users: "There are already " + snapshot.val() + " users."
      });
    });
  }
  render() {
    return <SignUp users={this.state.users} />;
  }
}

export default App;
