import "./LogInForm.css";
import React from "react";
import firebase from "../../../firebase.js";
const auth = firebase.auth();
/*auth.createUserWithEmailAndPassword(email.pass);
auth.signInWithEmailAndPassword(email.pass);
auth.onAuthStateChanged(firebaseUser => {});
auth.signOut();*/
class LogInForm extends React.Component {
  render() {
    return (
      <div className="log-in-form">
        <form>
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
}

export default LogInForm;
