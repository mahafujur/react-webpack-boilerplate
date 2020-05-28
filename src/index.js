import App from "./js/components/app";
import ReactDOM from "react-dom";
import React from "react";


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;