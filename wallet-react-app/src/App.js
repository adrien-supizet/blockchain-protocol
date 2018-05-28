import React, { Component } from "react";
import "./App.css";
import SignUpControl from "./components/Account/SignUpControl";
import firebase from "./firebase.js";

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
  }
  render() {
    return <SignUpControl users={this.state.users} />;
  }
}

export default App;
