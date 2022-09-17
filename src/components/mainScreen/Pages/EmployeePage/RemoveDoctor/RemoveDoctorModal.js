import React from "react";
import { Modal } from "antd";

import { WarningMessage } from "./RemoveDoctor.styled";

const RemoveDoctorModal = ({ visible, onClose, onOk, doctorName }) => {
  return (
    <Modal
      title={doctorName}
      visible={visible}
      onCancel={onClose}
      onOk={onOk}
    >
		<WarningMessage>Are you sure you want to remove this doctor?</WarningMessage>
	</Modal>
  );
};

export default RemoveDoctorModal;
