import { setDataToDataBase } from "../../../../../firebase/setDataToDataBase";
import { mutateDate } from "../mutateData";

export const sendAdmissionsChanges = async (user, newData, userRole, record) => {
  const { uid, name, surname } = user;
  const { id, userId, appointmentId } = record;
  
  const modifiedData = mutateDate(newData, true);

  const pathForDoctorChange = `users/${userRole}/${uid}/admissions/${id}`;
  const pathForClientChange = `users/clients/${userId}/appointments/${appointmentId}`;

  const doctor = `${name} ${surname}`;
  const dataForDoctor = modifiedData[id];
  const { dateOfAdmission, healthComplaints, status, time } = dataForDoctor;

  const dataForClient = {
    dateOfAdmission,
    healthComplaints,
    status,
    time,
    doctor,
    id: appointmentId,
    admissionId: id,
    userId: uid,
  };

  setDataToDataBase(pathForDoctorChange, dataForDoctor);
  setDataToDataBase(pathForClientChange, dataForClient);
};
