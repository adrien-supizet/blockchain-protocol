import React, { PureComponent } from "react";
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
          Create an account to send and receive some Coins.
        </header>
        <LogInForm />
        <footer className="LogIn-footer">
          Don&apos;t have an account?<a href=""> Sign up here</a>.
        </footer>
      </div>
    );
  }
}

LogIn.propTypes = {};

LogIn.defaultProps = {};

export default LogIn;
