import React from "react";
import { Link } from "react-router-dom";
import "./WalletControl.css";
import firebase from "../../../firebase.js";
import AddressList from "../AddressList";
import TransactionForm from "../TransactionForm";

class WalletControl extends React.Component {
  render() {
    return (
      <div className="wallet-control">
        <header className="wallet-header">
          <h1>Wallet app</h1>
          {this.LogOutButton()}
        </header>
        <TransactionForm className="transaction" />
        <AddressList className="address-list" />
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
