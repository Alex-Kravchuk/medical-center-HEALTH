import React from "react";

import { useDispatch } from "react-redux";

import { Button, Badge, Tooltip } from "antd";
import { BellOutlined } from "@ant-design/icons";

import {
  AboutUser,
  CustomizeHeaderHomePage,
  HeaderNotification,
  PageName,
  UserName,
  Wrapper,
  CustomAvatar,
} from "./Header.styled";

import doctor from "../../../images/doctor.png";
import { logOut } from "../../../redux/authReducer/authReducer";

const HeaderHomePage = () => {
  const dispatch = useDispatch();
  const logOutHandler = () => dispatch(logOut());

  return (
    <CustomizeHeaderHomePage className="site-layout-background">
      <Wrapper>
        <PageName>Addmissions</PageName>
        <AboutUser>
          <Tooltip placement="left" title="Notifications">
            <HeaderNotification>
              <Badge count={1}>
                <CustomAvatar icon={<BellOutlined />} />
              </Badge>
            </HeaderNotification>
          </Tooltip>

          <UserName>Alex Kravchuk</UserName>
          <Tooltip placement="bottom" title="Profile">
            <CustomAvatar
              user="true"
              size="large"
              icon={<img src={doctor} />}
            />
          </Tooltip>
          <Button style={{ margin: "0 0 0 40px" }} onClick={logOutHandler}>
            Log out
          </Button>
        </AboutUser>
      </Wrapper>
    </CustomizeHeaderHomePage>
  );
};

export default HeaderHomePage;
