import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataFromDataBase } from "../../../firebase/getDataFromDataBase";
import { setDataToDataBase } from "../../../firebase/setDataToDataBase";

import { signUp } from "../../../firebase/requestToFirebase";

import { defineUserRole } from "../../../auxiliary functions/defineUserRole";
import { defineTypeOfError } from "../../../auxiliary functions/defineTypeOfError";

export const signUpAction = createAsyncThunk(
  "signUp",
  async ({ email, password, name, surname, specialization, role, type }) => {
    const userRole = defineUserRole(role);
    let response = await signUp(email, password);

    if (typeof response === "string") {
      return defineTypeOfError(response);
    }

    const { uid } = response;

    const newUserData = {
      email,
      name,
      surname,
      specialization: specialization ?? null,
      role,
      uid,
    };

    await setDataToDataBase(`users/${userRole}/` + uid, newUserData);

    const userData = await getDataFromDataBase(`users/${userRole}/` + uid);

    if (userData) {
      return { ...userData, uid, type };
    }
    return response;
  }
);
