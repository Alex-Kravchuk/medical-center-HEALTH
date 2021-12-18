import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button, Badge, Tooltip, Popconfirm } from "antd";
import { BellOutlined, LoadingOutlined } from "@ant-design/icons";

import {
  AboutUser,
  CustomizeHeaderHomePage,
  HeaderNotification,
  PageName,
  UserName,
  Wrapper,
  CustomAvatar,
} from "./Header.styled";

import photoNotFound from "../../../images/photo-not-found.png";
import { signOutAction } from "../../../redux/authReducer/actions/signOut";
import { Link } from "react-router-dom";

const HeaderHomePage = ({ collapse }) => {
  const { user, loading, atention } = useSelector((state) => state.auth);
  const { currentPage } = useSelector((state) => state);
  const { name, surname, avatarURL } = user;
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(signOutAction());
  };

  return (
    <CustomizeHeaderHomePage
      className="site-layout-background"
      collapse={collapse.toString()}
    >
      <Wrapper>
        <PageName>{currentPage}</PageName>
        <AboutUser>
          <Tooltip placement="left" title="Notifications">
            <HeaderNotification>
              <Badge count={1}>
                <CustomAvatar icon={<BellOutlined />} />
              </Badge>
            </HeaderNotification>
          </Tooltip>

          <UserName>
            {name} {surname}
          </UserName>
          <Tooltip placement="bottom" title="Profile">
            <Link to="profile">
              <CustomAvatar
                user="true"
                size="large"
                icon={
                  <img
                    src={avatarURL ?? photoNotFound}
                    alt="icon"
                    placeholder={"loading"}
                  />
                }
              />
            </Link>
          </Tooltip>
          <Popconfirm
            placement="bottomRight"
            onConfirm={logOutHandler}
            title="Are you sure?"
            okText="Yes"
            cancelText="No"
          >
            <Button style={{ margin: "0 0 0 40px" }} danger={atention}>
              {loading ? <LoadingOutlined /> : "Log out"}
            </Button>
          </Popconfirm>
        </AboutUser>
      </Wrapper>
    </CustomizeHeaderHomePage>
  );
};

export default HeaderHomePage;
