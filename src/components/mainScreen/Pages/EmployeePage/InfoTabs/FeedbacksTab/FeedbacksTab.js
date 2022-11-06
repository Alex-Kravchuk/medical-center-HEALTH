import React, { useEffect, useState } from "react";
import { Avatar, Comment, Spin, Empty } from "antd";

import AddFeedback from "./AddFeedback/AddFeedback";
import FeedbackDateTimeBlock from "./FeedbackDateTimeBlock";
import { FeedbacksListWrapper, FeedbackWrapper } from "./Feedbacks.styled";

import { ref, onValue } from "firebase/database";
import { database } from "../../../../../../firebase";

import photoNotFound from "../../../../../../images/photo-not-found.png";

const FeedbacksTab = ({ doctorUID }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(false);
  const [numberOfFeedback, setNumberOfFeedback] = useState(0);

  useEffect(() => {
    setLoadingFeedbacks(true);
    const dbRef = ref(database, `users/doctors/${doctorUID}/feedbacks`);

    onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const feedbacks = snapshot.val();
        setNumberOfFeedback(feedbacks.length);
        setFeedbacks(feedbacks);
      }
      setLoadingFeedbacks(false);
    });
  }, []);

  return (
    <FeedbacksListWrapper>
      {loadingFeedbacks ? (
        <Spin size="large" />
      ) : (
        <>
          {feedbacks.length === 0 ? (
            <Empty />
          ) : (
            feedbacks.map((feedback, index) => (
              <FeedbackWrapper key={index}>
                <Comment
                  author={feedback.author}
                  avatar={
                    <Avatar
                      src={
                        feedback.avatarURL ? feedback.avatarURL : photoNotFound
                      }
                      alt={feedback.author}
                    />
                  }
                  content={feedback.content}
                  datetime={
                    <FeedbackDateTimeBlock
                      time={feedback.time}
                      date={feedback.date}
                    />
                  }
                />
              </FeedbackWrapper>
            ))
          )}
        </>
      )}

      <AddFeedback doctorUID={doctorUID} numberOfFeedback={numberOfFeedback} />
    </FeedbacksListWrapper>
  );
};

export default FeedbacksTab;
