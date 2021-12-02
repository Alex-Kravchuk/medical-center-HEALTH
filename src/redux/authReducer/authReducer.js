import { createSlice } from "@reduxjs/toolkit";

import { user as fakeUser } from "../../mock/fakeUser";
import { fetchUser } from "./fetchUserLogIn/fetchUser";

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
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.atention = false;
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      debugger;
      const { data, status } = action.payload;
      if (status === 200) {
        state.user = data.user;
      } else {
        state.atention = true;
      }

      state.loading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.atention = true;
      state.user = null;
    });
  },
});

export const { signIn, logOut } = authSlice.actions;

export default authSlice.reducer;
