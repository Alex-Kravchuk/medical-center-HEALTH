import { setDataToDataBase } from "../../../../../firebase/setDataToDataBase";
import { mutateDate } from "../mutateData";

export const sendAppointmentsChanges = (user, newData, userRole, record) => {
  const { name, surname, uid, avatarURL } = user;
  const { id, userId, admissionId } = record;

  const path = `users/${userRole}/${uid}/appointments/${id}`;
  const specialPath = `users/doctors/${userId}/admissions/${admissionId}`;

  const modifiedData = mutateDate(newData, true);

  const dataForClient = modifiedData[id];

  const { dateOfAdmission, healthComplaints, status, time } = dataForClient;

  const dataForDoctor = {
    dateOfAdmission,
    healthComplaints,
    status,
    time,
    name,
    surname,
    avatarURL: avatarURL ?? null,
    id: admissionId,
    appointmentId: id,
    userId: uid,
  };

  setDataToDataBase(path, dataForClient);
  setDataToDataBase(specialPath, dataForDoctor);
};
