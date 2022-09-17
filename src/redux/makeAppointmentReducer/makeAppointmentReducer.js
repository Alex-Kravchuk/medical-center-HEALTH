import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  generalSymptoms: [],
  symptomDetails: "",
  doctor: {
    name: "",
    uid: "",
  },
  time: null,
  date: "",
};

export const makeAppointmentSlice = createSlice({
  name: "makeAppointment",
  initialState,
  reducers: {
    describeSymptoms(state, action) {
      const { generalSymptoms, symptomDetails } = action.payload;
      state.generalSymptoms = generalSymptoms;
      state.symptomDetails = symptomDetails;
    },

    chooseDoctor(state, action) {
      state.doctor = action.payload;
    },

    selectTimeAndDate(state, action) {
      const { time, date } = action.payload;
      state.time = time;
      state.date = date;
    },

    resetOldValues(state) {
      return {
        generalSymptoms: [],
        symptomDetails: "",
        doctor: {
          name: "",
          uid: "",
        },
        time: null,
        date: "",
      };
    },
  },
});

export const {
  describeSymptoms,
  chooseDoctor,
  selectTimeAndDate,
  resetOldValues,
} = makeAppointmentSlice.actions;

export default makeAppointmentSlice.reducer;
