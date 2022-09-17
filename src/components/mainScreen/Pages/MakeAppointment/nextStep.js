
import { message } from "antd";
import { useDispatch } from "react-redux";

export const nextStep = (appointmentData, aboutSymptoms, currentStep, setCurrentStep) => {
const dispatch = useDispatch()
	if (currentStep === 0) {
		const nothingSelected = aboutSymptoms.generalSymptoms.length === 0;
		if (nothingSelected) {
		  message.error("You should choose general symptoms");
		  return;
		} else {
		  dispatch(describeSymptoms({ ...aboutSymptoms }));
		}
	  }
  
	  if (currentStep === 1) {
		const noDoctorsWereSelected = appointmentData.doctor.uid.length === 0;
		if (noDoctorsWereSelected) {
		  message.error("You need to choose a doctor");
		  return;
		}
	  }
  
	  if (currentStep === 2) {
		const dateNotSelected = timeAndDate.date.length === 0;
		const timeNotSelected = timeAndDate.time === null;
		if (timeNotSelected || dateNotSelected) {
		  message.error("You need to choose a date and time");
		  return;
		} else {
		  dispatch(selectTimeAndDate(timeAndDate));
		}
	  }
  
	  setCurrentStep((state) => state + 1);
}