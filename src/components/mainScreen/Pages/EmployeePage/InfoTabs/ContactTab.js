import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmailIcon, MobilePhoneIcon } from "../../../../../fontawesome";
import { ContactTabItem } from "../EmployeePage.styled";

const ContactTab = ({ phone, email }) => {
  return (
    <>
      <ContactTabItem>
        <FontAwesomeIcon icon={MobilePhoneIcon} />
        <span>{phone}</span>
      </ContactTabItem>

      <ContactTabItem>
        <FontAwesomeIcon icon={EmailIcon} />
        <span>{email}</span>
      </ContactTabItem>
    </>
  );
};

export default ContactTab;
