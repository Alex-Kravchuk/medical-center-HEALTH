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


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC6hdRmyzXAJ2YCUspvS8GfsoNLWpUfiZE",
//   authDomain: "medical-center-health.firebaseapp.com",
//   databaseURL: "https://medical-center-health-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "medical-center-health",
//   storageBucket: "medical-center-health.appspot.com",
//   messagingSenderId: "907413987894",
//   appId: "1:907413987894:web:441475e7d75ccecd3fae97"
// };

// // Initialize Firebase
// const firebase = initializeApp(firebaseConfig);
// export const database = getDatabase(firebase);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
