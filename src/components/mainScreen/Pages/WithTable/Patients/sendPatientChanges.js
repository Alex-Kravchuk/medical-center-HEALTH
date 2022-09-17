import { setDataToDataBase } from "../../../../../firebase/setDataToDataBase";

export const sendPatientChanges = (uid, data) => {
  const { id, prescribedTreatment, therapist, statusOfTreatment, userId } =
    data;

  const updatedTreatmentData =
    statusOfTreatment === "discharged"
      ? null
      : { prescribedTreatment, therapist };

  const path = `users/doctors/${uid}/patients/${id}`;
  const pathForChangesInClientData = `users/clients/${userId}/isInTreatment`;

  setDataToDataBase(path, data);
  setDataToDataBase(pathForChangesInClientData, updatedTreatmentData);
};
