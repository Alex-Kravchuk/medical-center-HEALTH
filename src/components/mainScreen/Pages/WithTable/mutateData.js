import moment from "moment";

export function mutateDate(data, reverse) {
  const updateData = data.map((element) => {
    const copyElement = Object.assign({}, element);
    const { time, dateOfAdmission } = copyElement;

    if (reverse) {
      copyElement.time = moment(time).valueOf();
      copyElement.dateOfAdmission = dateOfAdmission.format("YYYY-MM-DD");
    } else {
      copyElement.time = moment(time);
      copyElement.dateOfAdmission = moment(dateOfAdmission);
    }

    return copyElement;
  });
  
  return updateData;
}
