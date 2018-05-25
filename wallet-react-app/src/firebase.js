/*When deploying Firebase apps to production, it is advisable to only import
the individual SDK components you intend to use.
For the module builds, these are available in the following manner
(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):
const firebase = require("firebase/app");
require("firebase/<PACKAGE>");*/
const firebase = require("firebase");
const config = {
  apiKey: "<AIzaSyBszhz3hM6tvzlPVw17J1g4NILJg9FLZsk>",
  authDomain: "blockchain-354c8.firebaseapp.com",
  databaseURL: "https://blockchain-354c8.firebaseio.com",
  projectId: "blockchain-354c8",
  storageBucket: "blockchain-354c8.appspot.com",
  messagingSenderId: "831335941029"
};
firebase.initializeApp(config);
export default firebase;
