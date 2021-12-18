import { createSlice } from "@reduxjs/toolkit";

import { changeProfileInfo } from "./actions/changeProfileInfo";

const initialState = {
  loading: false,
  successfully: null,
  atention: null,
};

export const changeUserData = createSlice({
  name: "changeUserData",
  initialState,
  reducers: {
    resetState(state) {
      state.loading = false;
      state.successfully = null;
      state.atention = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeProfileInfo.pending, (state) => {
      state.atention = null;
      state.loading = true;
    });
    builder.addCase(changeProfileInfo.fulfilled, (state, action) => {
      state.successfully = action.payload;
      state.loading = false;
    });
    builder.addCase(changeProfileInfo.rejected, (state, action) => {
      state.loading = false;
      state.atention = true;
      state.successfully = false;
    });
  },
});

export const { resetState } = changeUserData.actions;

export default changeUserData.reducer;
