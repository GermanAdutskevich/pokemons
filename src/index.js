import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import "./index.scss";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
