import React from "react";
import { Link } from "react-router-dom";
import "./WalletControl.css";
//import logo from "../../../resources/images/logo.svg";
import firebase from "../../../firebase.js";

class WalletControl extends React.Component {
  render() {
    return (
      <div className="wallet-control">
        <header className="wallet-header">
          <h1>Title</h1>
          {this.LogOutButton()}
        </header>
      </div>
    );
  }
  LogOutButton() {
    firebase.auth().signOut();
    return (
      <Link to="/login" className="sign-out">
        Log Out
      </Link>
    );
  }
}

export default WalletControl;
