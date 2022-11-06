import moment from "moment";

export const determineWhatHasChanged = (user, oldValues, newValues) => {
  //   getting doctor for definition category of notification

  const {
    doctor,
    therapist,
    dateOfAdmission: oldDateMomentType,
    time: oldTimeMomentType,
    status: oldStatus,
    prescribedTreatment: oldTreatment,
    statusOfTreatment: oldTreatmentStatus,
  } = oldValues;

  const {
    dateOfAdmission: newDateMomentType,
    time: newTimeMomentType,
    status: newStatus,
    prescribedTreatment: newTreatment,
    statusOfTreatment: newTreatmentStatus,
  } = newValues;

  const { name: userName, surname } = user;
  const name = `${userName} ${surname}`;
  const category = doctor !== undefined ? "doctor" : "client";

  const oldDate = moment(oldDateMomentType).format("YYYY-MM-DD");
  const oldTime = moment(oldTimeMomentType).format("hh:mm a");

  const newDate = moment(newDateMomentType).format("YYYY-MM-DD");
  const newTime = moment(newTimeMomentType).format("hh:mm a");

  const dateHasChanged = oldDate !== newDate;
  const timeHasChanged = oldTime !== newTime;
  const statusHasChanged = newStatus !== undefined && oldStatus !== newStatus;
  const treatmentHasChanged = oldTreatment !== newTreatment;

  const patientHasDischarged = oldTreatmentStatus !== newTreatmentStatus;

  if (dateHasChanged && timeHasChanged) {
    return {
      type: "dateAndTime",
      category,
      contentData: {
        name,
        oldDate,
        oldTime,
        newDate,
        newTime,
      },
    };
  }

  if (dateHasChanged) {
    return {
      type: "date",
      category,
      contentData: {
        name,
        time: oldTime,
        oldDate,
        newDate,
      },
    };
  }

  if (timeHasChanged) {
    return {
      type: "time",
      category,
      contentData: {
        name,
        date: oldDate,
        oldTime,
        newTime,
      },
    };
  }

  if (statusHasChanged) {
    return {
      type: "status",
      category,
      contentData: {
        name,
        date: oldDate,
        time: oldTime,
      },
    };
  }

  if (treatmentHasChanged) {
    return {
      type: "changeTreatment",
      category,
      contentData: {
        name: therapist,
      },
    };
  }

  if (patientHasDischarged) {
    return {
      type: "discharged",
      category,
      contentData: {
        name: therapist,
      },
    };
  }

  return null;
};
