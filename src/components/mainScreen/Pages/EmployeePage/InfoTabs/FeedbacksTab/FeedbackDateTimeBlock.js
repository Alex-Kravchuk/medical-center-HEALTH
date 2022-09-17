import React from "react";
import moment from "moment";

import { DateTimeBlock } from "./Feedbacks.styled";

const FeedbackDateTimeBlock = ({ date, time }) => {
  return (
    <DateTimeBlock>
      <span>{date}</span>
      <span>{moment(time).format("hh:mm a")}</span>
    </DateTimeBlock>
  );
};

export default FeedbackDateTimeBlock;
