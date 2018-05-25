import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./CreateAccount.css";
import SignUpForm from "../SignUpForm";

class CreateAccount extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CreateAccount">
        <header className="CreateAccount-header">
          Create an account to send and receive some Coins.
        </header>
        <SignUpForm />
        <footer className="CreateAccount-footer">
          Already have an account?<a href=""> Sign in here</a>.
        </footer>
      </div>
    );
  }
}

CreateAccount.propTypes = {};

CreateAccount.defaultProps = {};

export default CreateAccount;
