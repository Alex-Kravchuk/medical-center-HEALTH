import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDataToDataBase } from "../../../../../firebase/setDataToDataBase";
import { DeleteUser } from "../../../../../fontawesome";
import { Container } from "../../Employees/AddDoctorForm/AddDoctorForm.styled";
import { IconContainer, Wrapper } from "./RemoveDoctor.styled";
import RemoveDoctorModal from "./RemoveDoctorModal";

const RemoveDoctor = ({ doctorName, currentDoctorUID }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onShowModal = () => setShowModal(true);
  const onCloseModal = () => setShowModal(false);

  const onOkModal = () => {
    // This is a really bad solution for that task
    // I could make functional for deleting user by itself but I`m just learning
    const pathForDeleting = `users/doctors/${currentDoctorUID}`;
    const pathToPutInBlackList = `users/blacklist/${currentDoctorUID}`;
    setDataToDataBase(pathForDeleting, null);
    setDataToDataBase(pathToPutInBlackList, true);
    setShowModal(false);
    navigate("/home/employees");
  };

  return (
    <Wrapper>
      <Tooltip placement="left" title="Delete this doctor">
        <Container onClick={onShowModal}>
          <IconContainer>
            <FontAwesomeIcon icon={DeleteUser} />
          </IconContainer>
        </Container>
      </Tooltip>
      <RemoveDoctorModal
        visible={showModal}
        onClose={onCloseModal}
        onOk={onOkModal}
        doctorName={doctorName}
      />
    </Wrapper>
  );
};

export default RemoveDoctor;
