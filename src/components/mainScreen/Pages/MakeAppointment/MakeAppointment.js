import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { message, Steps } from "antd";

import {
  resetOldValues,
  describeSymptoms,
  selectTimeAndDate,
} from "../../../../redux/makeAppointmentReducer/makeAppointmentReducer";
import { changePageName } from "../../../../redux/pageNameReducer/pageNameReducer";

import Checking from "./Steps/Checking/Checking";
import ChooseDoctor from "./Steps/ChooseDoctor/ChooseDoctor";
import DescribeSymptoms from "./Steps/DescribeSymptoms/DescribeSymptoms";
import StepsControlButton from "./StepsControlButtons/StepsControlButton";
import SelectTimeAndDate from "./Steps/SelectTimeAndDate/SelectTimeAndDate";
import SuccessfullyRegistered from "./SuccessfullyRegistered/SuccessfullyRegistered";

import { Container, Wrapper } from "./MakeAppointment.styled";

const { Step } = Steps;

const MakeAppointment = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const appointmentData = useSelector((state) => state.makeAppointment);

  const [currentStep, setCurrentStep] = useState(0);
  const [aboutSymptoms, setDescribe] = useState({
    generalSymptoms: [],
    symptomDetails: "",
  });
  const [timeAndDate, setTimeAndDate] = useState({
    time: null,
    date: "",
  });
  const [lastPage, setLastPage] = useState(false);
  const [successfully, setSuccessfully] = useState(false);

  useEffect(() => {
    const { pathname } = location;
    dispatch(changePageName({ pathname }));
    dispatch(resetOldValues());
  }, []);

  const next = () => {
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
  };

  const previous = () => {
    setCurrentStep((state) => state - 1);
  };

  const steps = [
    {
      title: "Describe the symptoms",
      content: (
        <DescribeSymptoms
          handler={setDescribe}
          describeSymptoms={aboutSymptoms}
          lastPageHandler={setLastPage}
        />
      ),
    },
    {
      title: "Choose a doctor",
      content: <ChooseDoctor lastPageHandler={setLastPage} />,
    },
    {
      title: "Select a time and date",
      content: (
        <SelectTimeAndDate
          handler={setTimeAndDate}
          lastPageHandler={setLastPage}
        />
      ),
    },

    {
      title: "Check it out",
      content: <Checking lastPageHandler={setLastPage} />,
    },
  ];

  const stepContent = steps[currentStep].content;

  return (
    <>
      {successfully ? (
        <SuccessfullyRegistered />
      ) : (
        <>
          <Steps current={currentStep}>
            {steps.map((step) => (
              <Step key={step.title} title={step.title} />
            ))}
          </Steps>
          <Wrapper>
            <Container>{stepContent}</Container>
          </Wrapper>
          <StepsControlButton
            currentStep={currentStep}
            handlerToPrevious={previous}
            handlerToNext={next}
            lastPage={lastPage}
            appointmentData={appointmentData}
            successfullyHandler={setSuccessfully}
          />
        </>
      )}
    </>
  );
};

export default MakeAppointment;
