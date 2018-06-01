import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./SignUpControl.css";
import logo from "../../../resources/images/logo.svg";
import CreateAccount from "../CreateAccount";
import LogIn from "../LogIn";

class SignUpControl extends React.Component {
  render() {
    return (
      <div className="sign-up-control">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Wallet app </h1>
        </header>
        {
          <div className="description">
            <h2 className="headline">
              Make instant transactions to anyone in the world.
            </h2>
            {/*<h2> Send and receive [coin_name] Coin using this app.</h2>
            <p className="intro">
              [coin_name] was created from scratch, on top of my own blockchain.
            </p>*/}
            {this.displayUsers()}
          </div>
        }
        <div className="signUp">
          <BrowserRouter>
            <Switch>
              <Route exact path={"/login"} component={LogIn} />
              <Route default-path={"/signUp"} component={CreateAccount} />
            </Switch>
          </BrowserRouter>
        </div>

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
  displayUsers() {
    if (this.props.users) {
      return (
        <p> There are already {this.props.users} users. Join the community.</p>
      );
    }
  }
}

export default SignUpControl;
