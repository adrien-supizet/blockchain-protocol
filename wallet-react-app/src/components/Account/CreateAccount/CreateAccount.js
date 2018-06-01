import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./CreateAccount.css";
import SignUpForm from "../SignUpForm";

class CreateAccount extends PureComponent {
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
