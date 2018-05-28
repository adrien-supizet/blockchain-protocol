import "./SignUpForm.css";
import React from "react";
import { Redirect } from "react-router";
import firebase from "../../../firebase.js";
const auth = firebase.auth();
class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      isEnabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const submit =
      this.state.email.length > 1 &&
      this.state.password.length > 1 &&
      this.state.name.length > 1
        ? true
        : false;
    console.log(submit);
    this.setState({
      [event.target.name]: event.target.value,
      isEnabled: submit
    });
  }
  submitForm(e) {
    e.preventDefault();
    this.props.history.push("/a");
  }
  render() {
    return (
      <div className="sign-up-form">
        <form onSubmit={this.submitForm.bind(this)}>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              required
            />
          </label>
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
            type="Submit"
            value="Submit"
            disabled={!this.state.isEnabled}
            onClick={this.handleClick}
          />
        </form>
      </div>
    );
  }
  handleClick() {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          alert("The password is too weak.");
        } else if (errorCode === "auth/invalid-email") {
          alert("The email is not valid.");
        } else if (errorCode === "auth/email-already-in-use") {
          alert(
            "This email is already associated to an account. Reset the password HERE"
          ); //TODO
        }
        console.log(error);
      });
  }
}

export default SignUpForm;
