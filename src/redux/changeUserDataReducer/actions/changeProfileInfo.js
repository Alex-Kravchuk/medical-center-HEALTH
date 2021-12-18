import { createAsyncThunk } from "@reduxjs/toolkit";

import { setDataToDataBase } from "../../../firebase/setDataToDataBase";

export const changeProfileInfo = createAsyncThunk(
  "changeProfileInfo",
  async ({ userID, data }) => {
    let response = await setDataToDataBase('users/clients/' + userID, data);
    return response;
  }
);
