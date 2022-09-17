import { createAsyncThunk } from "@reduxjs/toolkit";

import { signIn } from "../../../firebase/requestToFirebase";
import { getDataFromDataBase } from "../../../firebase/getDataFromDataBase";

import { defineTypeOfError } from "../../../auxiliary functions/defineTypeOfError";

export const logInAction = createAsyncThunk(
  "logIn",
  async ({ email, password }) => {
    let userData;
    let response = await signIn(email, password);
    const { uid } = response;

    if (typeof response === "string") {
      return defineTypeOfError(response);
    }

    const inBlackList = await getDataFromDataBase("users/blacklist/" + uid);
    if (inBlackList) {
      return "Such a user no longer exists";
    }

    userData = await getDataFromDataBase("users/admin/" + uid);
    if (userData) {
      return { ...userData, uid };
    }

    userData = await getDataFromDataBase("users/clients/" + uid);
    if (userData) {
      return { ...userData, uid };
    }

    userData = await getDataFromDataBase("users/doctors/" + uid);

    if (userData) {
      return { ...userData, uid };
    }

    return response;
  }
);
