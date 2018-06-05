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
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidUpdate() {
    const submit =
      this.state.email.length > 0 && this.state.password.length > 0
        ? true
        : false;
    if (submit != this.state.isEnabled)
      this.setState({
        isEnabled: submit
      });
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
            type="submit"
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
