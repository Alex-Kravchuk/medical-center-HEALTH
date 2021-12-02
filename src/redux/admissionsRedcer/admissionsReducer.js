import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    key: "1",
    name: "John",
    surname: "Brown",
    healthComplaints: ["headache", "stomach ache", "nausea"],
    dateOfAdmission: "2021-12-11",
    time: "2021-11-30T11:33:00.000Z",
    status: "waiting",
  },
  {
    key: "2",
    name: "Jim ",
    surname: "Green",
    healthComplaints: ["stomach ache", "nausea", "headache"],
    dateOfAdmission: "2021-12-13",
    time: "2021-11-30T13:47:00.000Z",
    status: "waiting",
  },
  {
    key: "3",
    name: "Alex",
    surname: "Grow",
    healthComplaints: ["headache", "stomach ache", "nausea"],
    dateOfAdmission: "2021-12-01",
    time: "2021-11-30T04:03:00.000Z",
    status: "admitted ",
  },
  {
    key: "4",
    name: "John",
    surname: "Brown",
    healthComplaints: ["headache", "stomach ache", "nausea"],
    dateOfAdmission: "2021-12-11",
    time: "2021-11-30T23:01:00.000Z",
    status: "waiting",
  },
];

export const admissionsSlice = createSlice({
  name: "admissions",
  initialState,
  reducers: {
    addData(state, action) {
      return [...action.payload];
    },
  },
});

export const { signIn, logOut } = admissionsSlice.actions;

export default admissionsSlice.reducer;
