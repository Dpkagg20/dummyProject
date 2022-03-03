import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
console.log('gurinder', APP_TYPE, APP_CONFIG );
const appRouting = (
  <Router>
  <App/>
  </Router>
);
ReactDOM.render(<App/>, document.getElementById("root"));