import { createAsyncThunk } from "@reduxjs/toolkit";

import { setDataToDataBase } from "../../../firebase/setDataToDataBase";

export const changeProfileInfo = createAsyncThunk(
  "changeProfileInfo",
  async (data) => {
    const { userData, userRole } = data;
    let response = await setDataToDataBase(
      `users/${userRole}/` + userData.uid,
      userData
    );
    return response;
  }
);
