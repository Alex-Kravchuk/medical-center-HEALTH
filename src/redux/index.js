import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authReducer/authReducer";
import pageNameReducer from "./pageNameReducer/pageNameReducer";
import changeUserData from "./changeUserDataReducer/changeUserDataReducer";
import makeAppointmentReducer from "./makeAppointmentReducer/makeAppointmentReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    changingUserData: changeUserData,
    currentPage: pageNameReducer,
    makeAppointment: makeAppointmentReducer,
  },
});
