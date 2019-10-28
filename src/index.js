import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
