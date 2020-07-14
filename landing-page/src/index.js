import React from "react";
import ReactDOM from "react-dom";
import PagesHolder from "./components";
const firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyBm_iufV8_wuEsnBOkF9TT2MKrPitt50Hk",
  authDomain: "doctor-7ea46.firebaseapp.com",
  databaseURL: "https://doctor-7ea46.firebaseio.com",
  projectId: "doctor-7ea46",
  storageBucket: "doctor-7ea46.appspot.com",
  messagingSenderId: "593901484463",
  appId: "1:593901484463:web:cba4f9991366fbb7a8575a",
  measurementId: "G-XBV3X2VF7B",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <PagesHolder />
  </React.StrictMode>,
  document.getElementById("root")
);
