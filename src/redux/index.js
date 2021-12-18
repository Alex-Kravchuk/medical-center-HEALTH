import { configureStore } from "@reduxjs/toolkit";

import admissionsReducer from "./admissionsRedcer/admissionsReducer";
import authReducer from "./authReducer/authReducer";
import changeUserData  from "./changeUserDataReducer/changeUserDataReducer";
import pageNameReducer from "./pageNameReducer/pageNameReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    changingUserData: changeUserData,
    admissionsData: admissionsReducer,
    currentPage: pageNameReducer,
  },
});
