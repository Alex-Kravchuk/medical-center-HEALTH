import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { createGlobalStyle } from "styled-components";


import App from "./App";

import "antd/dist/antd.css";
import "./index.css";

import { store } from "./redux";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    background: #dcd8cf;
  }
  .ant-form-vertical .ant-form-item-label > label {
    height: auto;
    width: 100%;
}
`;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
