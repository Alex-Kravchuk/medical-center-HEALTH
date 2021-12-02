import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authReducer/authReducer";
import admissionsReducer from "./admissionsRedcer/admissionsReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admissionsData: admissionsReducer,
  },
});
