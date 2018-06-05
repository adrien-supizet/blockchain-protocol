import React from "react";
import "./AddressList.css";
import firebase from "../../../firebase.js";
import List from "material-ui/List";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class AddressList extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="address-list">
          <header className="address-list-header">header</header>
          <div className="address-list-elements">
            /*https://medium.com/@ali.atwa/getting-started-with-material-ui-for-react-59c82d9ffd93*/
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AddressList;
