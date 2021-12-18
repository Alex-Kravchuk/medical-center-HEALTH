import { createSlice } from "@reduxjs/toolkit";

import { logInAction } from "./actions/logIn";
import { signUpAction } from "./actions/signUp";
import { signOutAction } from "./actions/signOut";

const initialState = {
  loading: false,
  user: null,
  atention: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeUserDataListener(state, action) {
      state.user = action.payload;
    },

    updateAvatarURL(state, action) {
      state.user.avatarURL = action.payload;
    },
  },
  extraReducers: (builder) => {
    // login actions
    builder.addCase(logInAction.pending, (state) => {
      state.atention = false;
      state.loading = true;
    });
    builder.addCase(logInAction.fulfilled, (state, action) => {
      if (typeof action.payload === "string") {
        state.atention = true;
      } else {
        state.user = action.payload;
      }

      state.loading = false;
    });
    builder.addCase(logInAction.rejected, (state, action) => {
      state.loading = false;
      state.atention = true;
      state.user = null;
    });

    // signup actions
    builder.addCase(signUpAction.pending, (state) => {
      state.atention = false;
      state.loading = true;
    });
    builder.addCase(signUpAction.fulfilled, (state, action) => {
      if (typeof action.payload === "string") {
        state.atention = true;
      } else {
        state.user = action.payload;
      }

      state.loading = false;
    });
    builder.addCase(signUpAction.rejected, (state, action) => {
      state.loading = false;
      state.atention = true;
      state.user = null;
    });

    // signOut actions
    builder.addCase(signOutAction.pending, (state) => {
      state.atention = false;
      state.loading = true;
    });
    builder.addCase(signOutAction.fulfilled, (state, action) => {
      if (typeof action.payload === "string") {
        state.atention = true;
      } else {
        state.user = null;
      }

      state.loading = false;
    });
    builder.addCase(signOutAction.rejected, (state, action) => {
      state.loading = false;
      state.atention = true;
      state.user = null;
    });
  },
});

export const { changeUserDataListener, updateAvatarURL } = authSlice.actions;

export default authSlice.reducer;
