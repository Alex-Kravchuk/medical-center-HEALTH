import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataFromDataBase } from "../../../firebase/getDataFromDataBase";

import { requestToFireBase } from "./requestToFirebase";

export const fetchUser = createAsyncThunk(
  "logIn",
  async ({ email, password }, { rejectWithValue }) => {
    const apiKey = "AIzaSyC6hdRmyzXAJ2YCUspvS8GfsoNLWpUfiZE";
    const enteredData = { email, password, returnSecureToken: true };
    let response = await requestToFireBase(
      enteredData,
      apiKey,
      rejectWithValue
    );

    const userData = await getDataFromDataBase("users");
    if (userData) {
      for (const dataKey in userData) {
        if (Object.hasOwnProperty.call(userData, dataKey)) {
          const user = userData[dataKey];

          if (user.email === email) {
            response.data.user = user;
            return response;
          }
        }
      }
    }

    return response;
  }
);
