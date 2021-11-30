import { createSlice } from "@reduxjs/toolkit";

import { user as fakeUser } from "../../mock/fakeUser";

const initialState = {
  loading: false,
  user: null,
  atention: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action) {
      const { email, password, remember } = action.payload;
      state.loading = true;

      const checkEmail = fakeUser.email === email;
      const checkPassword = fakeUser.password === password;

      if (checkEmail && checkPassword) {
        state.user = { email, password, remember };
      } else {
        state.atention = true;
      }

      state.loading = false;
    },
    logOut(state) {
      state.user = null;
      state.atention = false;
      state.loading = false;
    },
  },
});

export const { signIn, logOut } = authSlice.actions;

export default authSlice.reducer;
