import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const $fontAwesome = document.createElement("script");
$fontAwesome.src = "https://kit.fontawesome.com/2fda1b0923.js";
$fontAwesome.crossOrigin = "anonymous";

document.querySelector("head").appendChild($fontAwesome);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
