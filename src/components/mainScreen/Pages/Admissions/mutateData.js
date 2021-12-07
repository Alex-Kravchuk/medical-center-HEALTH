import moment from "moment";

export function mutateDate(data) {
  const updateData = data.map((element) => {
    const copyElement = Object.assign({}, element);
    const { time, dateOfAdmission } = copyElement;
    copyElement.time = moment(time);
    copyElement.dateOfAdmission = moment(dateOfAdmission);
    return copyElement;
  });
  return updateData;
}
