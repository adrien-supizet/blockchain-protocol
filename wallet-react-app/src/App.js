import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateAccount from "./components/CreateAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wallet app </h1>
        </header>
        <div className="App-description">
          <h2 className="App-headline">
            Make instant transactions to anyone in the world.
          </h2>
          <h2> Send and receive [coin_name] Coin using this wallet.</h2>
          <p className="App-intro">
            [coin_name] was created from scratch, on top of my own blockchain.
          </p>
        </div>
        <CreateAccount />
        <footer className="App-footer">
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

export default App;
