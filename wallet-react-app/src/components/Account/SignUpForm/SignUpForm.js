import "./SignUpForm.css";
import React from "react";

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
              autocomplete="current-password"
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUpForm;
