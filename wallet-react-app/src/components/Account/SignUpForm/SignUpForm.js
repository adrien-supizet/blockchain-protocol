import "./SignUpForm.css";
import React from "react";
import { withRouter } from "react-router-dom";
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
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  componentDidUpdate() {
    const nonEmpty =
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.name.length > 0
        ? true
        : false;
    if (nonEmpty != this.state.isEnabled)
      this.setState({
        isEnabled: nonEmpty
      });
  }
  submitForm(e) {
    e.preventDefault();
    //this.props.history.push("/a");
  }

  render() {
    return (
      <div className="account-form">
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
            src="/a"
          />
        </form>
      </div>
    );
  }
  handleClick() {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
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
        console.log(errorCode, errorMessage);
      })
      .then(user => {
        const rootRef = firebase
          .database()
          .ref()
          .child("react");
        const UsersRef = rootRef.child("users");
        var newValue = 0;
        UsersRef.on("value", snapshot => {
          newValue = snapshot.val() + 1;
        });
        UsersRef.set(newValue);
        const accountsRef = rootRef.child("accounts").child(user.user.uid);
        accountsRef.set({ email: this.state.email, name: this.state.name });
      });
  }
}

export default withRouter(SignUpForm);
