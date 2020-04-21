import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div style={{ height: "100vh" }}>
        <App root="" />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
