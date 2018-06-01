import "../SignUpForm/SignUpForm.css";
import React from "react";
import firebase from "../../../firebase.js";
const auth = firebase.auth();

class LogInForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isEnabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const submit =
      this.state.email.length > 1 && this.state.password.length > 1
        ? true
        : false;
    console.log(submit);
    this.setState({
      [event.target.name]: event.target.value,
      isEnabled: submit
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="account-form">
        <form>
          <label>
            Email:{" "}
            <input
              name="email"
              type="email"
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Password:{" "}
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={this.handleChange}
              required
            />
          </label>
          <input
            type=""
            value="Submit"
            disabled={!this.state.isEnabled}
            onClick={this.handleClick}
          />
        </form>
      </div>
    );
  }

  async handleClick() {
    await auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
}

export default LogInForm;
