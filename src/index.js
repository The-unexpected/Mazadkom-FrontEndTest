import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import User from "./context/context";

ReactDOM.render(
  <User>
    <Router>
      <App />
    </Router>
  </User>,
  document.getElementById("root")
);
