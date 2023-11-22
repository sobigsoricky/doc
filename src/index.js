import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Controller from "./screens/Controller";

ReactDOM.render(<Controller />, document.getElementById("root"));

reportWebVitals();