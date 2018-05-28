import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./LogIn.css";
import LogInForm from "../LogInForm";

class LogIn extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LogIn">
        <header className="LogIn-header">
          Log into your account to send and receive Coins.
        </header>
        <LogInForm />
        <footer className="LogIn-footer">
          Don&apos;t have an account?<Link to="/signup"> Sign up here</Link>.
        </footer>
      </div>
    );
  }
}

export default LogIn;
