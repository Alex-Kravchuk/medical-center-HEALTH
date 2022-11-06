import styled from "styled-components";

export const Wrapper = styled.div``;
export const DrawerTitle = styled.span`
  font-size: 22px;
`;

export const NotificationsList = styled.div``;

export const NotificationListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const NotificationWrapper = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f2f5;
  border: 1px solid lightgray;
  transition: 0.2s all ease;

  &:hover {
    background-color: #f4f5f0;
    border: 1px solid black;
  }
`;

export const NotificationHeaderWrap = styled.div`
  padding: 5px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const TimeDataBlock = styled.div`
  font-style: italic;
  font-weight: 600;
`;

export const TypeNotificationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
export const TypeName = styled.div`
  margin-left: 5px;
  font-weight: bold;
  color: #dba614;
`;

export const NotificationContentWrap = styled.div`
  text-align: stringify;
`;

export const Content = styled.p`
  text-align: justify;
  margin: 0;
`;

export const NotificationFooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div``;
export const ImportantBlock = styled.strong``;
