import { configureStore } from "@reduxjs/toolkit";

import admissionsReducer from "./admissionsRedcer/admissionsReducer";
import authReducer from "./authReducer/authReducer";
import pageNameReducer from "./pageNameReducer/pageNameReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admissionsData: admissionsReducer,
    currentPage: pageNameReducer,
  },
});
