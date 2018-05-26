import "./SignUpForm.css";
import React from "react";
import firebase from "../../../firebase.js";
const auth = firebase.auth();
class SignUpForm extends React.Component {
  render() {
    return (
      <div className="sign-up-form">
        <form>
          <label>
            Name: <input type="text" name="name" required />
          </label>
          <label>
            Email: <input id="emailAddress" type="email" required />
          </label>
          <label>
            Password:{" "}
            <input
              id="userPassword"
              type="password"
              autoComplete="current-password"
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  handlerClick() {
    auth
      .createUserWithEmailAndPassword("adri014@hotmail.fr", "test9294")
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else if (errorCode == "auth/invalid-email") {
          alert("The email is not valid.");
        } else if (errorCode == "auth/email-already-in-use") {
          alert(
            "This email is already associated to an account. Reset the password HERE"
          ); //TODO
        } else if (errorCode == "auth/weak-password") {
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }
}
export default SignUpForm;
