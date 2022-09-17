import React from "react";
import { Link } from "react-router-dom";

import { Label, PasswordLabelContainer } from "./Styles/Form.styled";

const CreateLabel = ({ text, password }) =>
  password ? (
    <PasswordLabelContainer>
      <Label>{text.toUpperCase()}</Label>
      <Label password>
        <Link to="/forgotPassword">Forgot password?</Link>
      </Label>
    </PasswordLabelContainer>
  ) : (
    <Label>{text.toUpperCase()}</Label>
  );

export default CreateLabel;
