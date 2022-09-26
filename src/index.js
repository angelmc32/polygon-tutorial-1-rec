import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./api/apollo-client";

import "./index.css";
import App from "./App";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";
UIkit.use(Icons); // Execute to allow icon use

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
