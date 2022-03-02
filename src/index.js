import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import "./index.scss";

const appRouting = (
  <Router>
  <App/>
  </Router>
);

ReactDOM.render(<App/>, document.getElementById("root"));