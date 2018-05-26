import React from "react";
import "./SignUp.css";
import logo from "../../../resources/images/logo.svg";
import CreateAccount from "../CreateAccount";
import LogIn from "../LogIn";

class SignUp extends React.Component {
  render() {
    return (
      <div className="sign-up">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Wallet app </h1>
        </header>
        <div className="description">
          <h2 className="headline">
            Make instant transactions to anyone in the world.
          </h2>
          <h2> Send and receive [coin_name] Coin using this app.</h2>
          <p className="intro">
            [coin_name] was created from scratch, on top of my own blockchain.
          </p>
          <p>{this.props.users} Join the community.</p>
        </div>
        {<CreateAccount className="signUp" />}
        <LogIn className="signUp" />
        <footer className="footer">
          Author:{" "}
          <a href="https://github.com/adrien-supizet/">Adrien Supizet</a> Check
          out the
          <a href="https://github.com/adrien-supizet/blockchain-protocol">
            Github project
          </a>
          and the <a>Blockchain explorer</a> (Coming soon!)
        </footer>
      </div>
    );
  }
}

export default SignUp;
