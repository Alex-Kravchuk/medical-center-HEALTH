const INPUT_TYPES = [
  "dateOfAdmission",
  "time",
  "statusOfTreatment",
  "prescribedTreatment",
  "status",
];

export const defineInputType = (dataIndex) => {
  const index = INPUT_TYPES.indexOf(dataIndex);

  return index >= 0 ? INPUT_TYPES[index] : null;
};
