import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataFromDataBase } from "../../../firebase/getDataFromDataBase";

import { signIn } from "../../../firebase/requestToFirebase";
const addminEmail = "sodasoad450@gmail.com";

export const logInAction = createAsyncThunk(
  "logIn",
  async ({ email, password }) => {
    let response = await signIn(email, password);
    const { uid } = response;

    if (typeof response === "string") {
      return response;
    }

    if (email === addminEmail) {
      const userData = await getDataFromDataBase("users/admin");
      return { ...userData, uid };
    }

    const userData = await getDataFromDataBase("users/clients/" + uid);
    if (userData) {
      return { ...userData, uid };
    }

    return response;
  }
);
