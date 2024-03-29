import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const pageNameSlice = createSlice({
  name: "changePageName",
  initialState,
  reducers: {
    changePageName(state, action) {
      const { pathname } = action.payload;
      let partsOfThePath = pathname.split("/");
      let currentPath = partsOfThePath[partsOfThePath.length - 1];
      const pathContainsTwoWords = currentPath.includes("-");
      if (pathContainsTwoWords) {
        let currentPathWithTwoWords = currentPath.split("-");
        currentPathWithTwoWords = currentPathWithTwoWords.join(" ");
        return (
          currentPathWithTwoWords[0].toUpperCase() +
          currentPathWithTwoWords.slice(1)
        );
      }
      return currentPath[0].toUpperCase() + currentPath.slice(1);
    },
  },
});

export const { changePageName } = pageNameSlice.actions;

export default pageNameSlice.reducer;
