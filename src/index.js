import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

const config = {
	apiKey: "AIzaSyCJyx4AZkIvFJ68HrXjq6yXxLry-ZYN-lw",
	authDomain: "rock-paper-19fc0.firebaseapp.com",
	databaseURL: "https://rock-paper-19fc0.firebaseio.com",
	storageBucket: "rock-paper-19fc0.appspot.com"
};
firebase.initializeApp(config);
