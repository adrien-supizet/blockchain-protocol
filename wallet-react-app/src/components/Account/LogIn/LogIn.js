import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../CreateAccount/CreateAccount.css";
import LogInForm from "../LogInForm";

class LogIn extends PureComponent {
  render() {
    return (
      <div className="Account">
        <header className="Account-header">
          Log into your account to send and receive Coins.
        </header>
        <LogInForm className="Account-form" />
        <footer className="Account-footer">
          Don&apos;t have an account?<Link to="/signup"> Sign up here</Link>.
        </footer>
      </div>
    );
  }
}

export default LogIn;
