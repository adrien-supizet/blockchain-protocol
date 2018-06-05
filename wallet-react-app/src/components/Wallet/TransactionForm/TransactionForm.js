import "./TransactionForm.css";
import React from "react";
import firebase from "../../../firebase.js";
const auth = firebase.auth();

class TransactionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      to: "",
      amount: "",
      isEnabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidUpdate() {
    const submit =
      this.state.to.length > 1 && this.state.amount > 0 ? true : false;
    console.log(submit);
    if (submit != this.state.isEnabled)
      this.setState({
        isEnabled: submit
      });
    console.log(this.state);
  }

  render() {
    return (
      <div className="transaction-form">
        <form>
          <label>
            To:{" "}
            <input
              name="to"
              type="text"
              className="toLabel"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Amount:{" "}
            <input
              name="amount"
              type="number"
              min="1"
              max="1000"
              className="amountLabel"
              onChange={this.handleChange}
              required
            />
          </label>
          <input
            type="submit"
            value="Send"
            className="submit"
            disabled={!this.state.isEnabled}
            onClick={this.handleClick}
          />
        </form>
      </div>
    );
  }

  async handleClick() {}
}

export default TransactionForm;
