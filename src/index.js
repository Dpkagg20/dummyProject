import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import dummyContainer from "./components/dummyContainer/dummyContainer.jsx";
import "./index.css";

const appRouting = (
  <Router>
  <App/>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));