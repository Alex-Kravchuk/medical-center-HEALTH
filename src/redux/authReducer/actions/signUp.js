import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataFromDataBase } from "../../../firebase/getDataFromDataBase";
import { setDataToDataBase } from "../../../firebase/setDataToDataBase";

import { signUp } from "../../../firebase/requestToFirebase";


export const signUpAction = createAsyncThunk(
  "signUp",
  async ({ email, password, name, surname }) => {
    let response = await signUp(email, password);

    if (typeof response === "string") {
      return response;
    }

    const { uid } = response;

    await setDataToDataBase("users/clients/" + uid, { email, name, surname });

    const userData = await getDataFromDataBase("users/clients/" + uid);
    debugger
    if (userData) {
      return {...userData, uid};
    }

    return response;
  }
);
