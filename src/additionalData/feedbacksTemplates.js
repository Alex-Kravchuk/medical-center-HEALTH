import {
  Content,
  ImportantBlock,
} from "../components/mainScreen/Notifications/Notifications.styled";

export const templates = {
  client: {
    types: [
      {
        name: "date",
        content: ({ name, time, oldDate, newDate }) => (
          <Content>
            Doctor <ImportantBlock>{name}</ImportantBlock> has changed your
            appoinment date from <ImportantBlock>{oldDate}</ImportantBlock> at{" "}
            <ImportantBlock>{time}</ImportantBlock> to{" "}
            <ImportantBlock>{newDate}</ImportantBlock> to{" "}
            <ImportantBlock>{time}</ImportantBlock>. Please check it out if you
            agree!
          </Content>
        ),
      },
      {
        name: "time",
        content: ({ name, date, oldTime, newTime }) => (
          <Content>
            Doctor <ImportantBlock>{name}</ImportantBlock> has changed your
            appoinment time on <ImportantBlock>{date}</ImportantBlock> from{" "}
            <ImportantBlock>{oldTime}</ImportantBlock> to{" "}
            <ImportantBlock>{newTime}</ImportantBlock>. Please check it out if
            you agree!
          </Content>
        ),
      },
      {
        name: "dateAndTime",
        content: ({ name, oldDate, oldTime, newDate, newTime }) => (
          <Content>
            Doctor <ImportantBlock>{name}</ImportantBlock> has changed the date
            and time of your appoinment from{" "}
            <ImportantBlock>{oldDate}</ImportantBlock> at{" "}
            <ImportantBlock>{oldTime}</ImportantBlock> to{" "}
            <ImportantBlock>{newDate}</ImportantBlock> at{" "}
            <ImportantBlock>{newTime}</ImportantBlock>. Please check it out if
            you agree!
          </Content>
        ),
      },
      {
        name: "status",
        content: ({ name, date, time }) => (
          <Content>
            Doctor <ImportantBlock>{name}</ImportantBlock> has confirmed your
            appointment on <ImportantBlock>{date}</ImportantBlock> at{" "}
            <ImportantBlock>{time}</ImportantBlock>. See you!
          </Content>
        ),
      },
      {
        name: "hospitalization",
        content: ({ name }) => (
          <Content>
            Doctor <ImportantBlock>{name}</ImportantBlock> has hospitalize you.
            Now you're on treatment. We will take care of you!
          </Content>
        ),
      },
      {
        name: "changeTreatment",
        content: ({ name }) => (
          <Content>
            Doctor <ImportantBlock>{name}</ImportantBlock> has prescribed a new
            treatment for you. Please familiarize yourself
          </Content>
        ),
      },
      {
        name: "discharged",
        content: ({ name }) => (
          <Content>
            Doctor <ImportantBlock>{name}</ImportantBlock> has discharged you.
            Take care!
          </Content>
        ),
      },
    ],
  },
  doctor: {
    types: [
      {
        name: "appointment",
        content: ({ name, time, date }) => (
          <Content>
            <ImportantBlock>{name}</ImportantBlock> made an appointment with you
            at <ImportantBlock>{time}</ImportantBlock> on{" "}
            <ImportantBlock>{date}</ImportantBlock> and is waiting your confirm.
          </Content>
        ),
      },
      {
        name: "date",
        content: ({ name, time, oldDate, newDate }) => (
          <Content>
            <ImportantBlock>{name}</ImportantBlock> has changed your appoinment
            date from <ImportantBlock>{oldDate}</ImportantBlock> at{" "}
            <ImportantBlock>{time}</ImportantBlock> to{" "}
            <ImportantBlock>{newDate}</ImportantBlock> to{" "}
            <ImportantBlock>{time}</ImportantBlock>. Please check it out if you
            agree!
          </Content>
        ),
      },
      {
        name: "time",
        content: ({ name, date, oldTime, newTime }) => (
          <Content>
            <ImportantBlock>{name}</ImportantBlock> has changed your apoinment
            time on <ImportantBlock>{date}</ImportantBlock> from{" "}
            <ImportantBlock>{oldTime}</ImportantBlock> at{" "}
            <ImportantBlock>{newTime}</ImportantBlock>. Please check it out if
            you agree!
          </Content>
        ),
      },
      {
        name: "dateAndTime",
        content: ({ name, oldDate, oldTime, newDate, newTime }) => (
          <Content>
            <ImportantBlock>{name}</ImportantBlock> has changed the date and
            time of your appoinment from{" "}
            <ImportantBlock>{oldDate}</ImportantBlock> at{" "}
            <ImportantBlock>{oldTime}</ImportantBlock> to{" "}
            <ImportantBlock>{newDate}</ImportantBlock> at{" "}
            <ImportantBlock>{newTime}</ImportantBlock>. Please check it out if
            you agree!
          </Content>
        ),
      },
      {
        name: "feedback",
        content: ({ name }) => (
          <Content>
            <ImportantBlock>{name}</ImportantBlock> left a review for you. Let's
            see!
          </Content>
        ),
      },
    ],
  },

  patients: {
    types: [
      {
        name: "changeTreatment",
        content: ({ name }) => (
          <Content>
            Doctor <ImportantBlock>{name}</ImportantBlock> has prescribed a new
            treatment for you. Please familiarize yourself
          </Content>
        ),
      },
      {
        name: "discharged",
        content: ({ name }) => (
          <Content>
            Doctor <ImportantBlock>{name}</ImportantBlock> has discharged you.
            Take care!
          </Content>
        ),
      },
    ],
  },
};
