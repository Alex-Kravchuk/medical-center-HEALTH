import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOutHandler } from "../../../firebase/requestToFirebase";

export const signOutAction = createAsyncThunk("signOut", async () => {
  let successfully;
  let response = await signOutHandler();

  if (typeof response === "string") {
    return response;
  }

  successfully = true;
  return successfully;
});
