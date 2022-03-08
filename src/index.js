import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";
import "./index.scss";
const appRouting = (

  <Provider store={store}>
{/* <BrowserRouter> */}
<App/>
{/* </BrowserRouter> */}
</Provider>

 
);
ReactDOM.render(<App/>, document.getElementById("root"));