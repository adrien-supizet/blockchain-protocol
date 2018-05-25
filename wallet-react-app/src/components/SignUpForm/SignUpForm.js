import "./SignUpForm.css";
import React from "react";
class SignUpForm extends React.Component {
  render() {
    return (
      <div className="sign-up-form">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUpForm;
