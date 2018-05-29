import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CreateAccount.css";
import SignUpForm from "../SignUpForm";

class CreateAccount extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Account">
        <header className="Account-header">
          Create an account to send and receive some Coins.
        </header>
        <SignUpForm className="Account-form" />
        <footer className="Account-footer">
          Already have an account?<Link to="/login"> Sign in here</Link>.
        </footer>
      </div>
    );
  }
}

export default CreateAccount;
