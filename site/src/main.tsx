import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
function run() {
  ReactDOM.render(App, document.getElementById("app"));
}

const loadedStates = ["complete", "loaded", "interactive"];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener("DOMContentLoaded", run, false);
}
