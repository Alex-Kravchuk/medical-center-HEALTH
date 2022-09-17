import React from "react";

import { Result } from "antd";

const QueryResult = (status) => {
  return (
    <div>
      {status ? (
        <Result
          status="success"
          title="Check your email!"
          subTitle="An email to change your password has been sent to your email address. If you can't find the message, check your spam folder"
        />
      ) : (
        <Result
          status="error"
          title="Something wrong"
          subTitle="Maybe you're fucking idiot"
        />
      )}
    </div>
  );
};

export default QueryResult;
