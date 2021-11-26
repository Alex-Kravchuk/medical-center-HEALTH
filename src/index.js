import React from "react";
import ReactDOM from "react-dom";

import { createGlobalStyle } from "styled-components";

import App from "./App";

import "antd/dist/antd.css";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
