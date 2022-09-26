import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";
UIkit.use(Icons); // Execute to allow icon use

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
