import React from "react";

import { Result } from "antd";

const SuccessfullyRegistered = () => {
  return (
    <Result
      status="success"
      title="You have successfully registered for the reception"
      subTitle="We are waiting for you at the HEALTH clinic. Bless you!"
    />
  );
};

export default SuccessfullyRegistered;
