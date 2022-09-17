import React, { useEffect, useState } from "react";

import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { UploadOutlined } from "@ant-design/icons";

import { uploadImage } from "../../../../../firebase/uploadImage";
import { defineUserRole } from "../../../../../auxiliary functions/defineUserRole";

import { setDataToDataBase } from "../../../../../firebase/setDataToDataBase";
import { updateAvatarURL } from "../../../../../redux/authReducer/authReducer";

import Placeholder from "./Placeholder";

import {
  ImageContainer,
  AvatarInfoBlock,
  CustomizeUpload,
} from "./ProfileAvatar.styled";
import { CustomeImage } from "./ProfileAvatar.styled";

import photoNotFound from "../../../../../images/photo-not-found.png";

const ProfileAvatar = ({ uid, avatarURL, role }) => {
  const dispatch = useDispatch();
  const [avatarURLNotFound, setAvatarURLNotFound] = useState(false);

  const userRole = defineUserRole(role);

  useEffect(() => {
    if (!avatarURL) {
      setAvatarURLNotFound(true);
    }
  });

  const saveUrl = (url) => {
    const path = `users/${userRole}/` + uid + "/avatarURL";
    setDataToDataBase(path, url);
    dispatch(updateAvatarURL(url));
    setAvatarURLNotFound(false);
  };

  const props = {
    name: "file",
    action: (file) => uploadImage(file, saveUrl),
    header: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <ImageContainer>
      <AvatarInfoBlock>
        <CustomeImage
          src={avatarURL ?? photoNotFound}
          notfound={avatarURLNotFound.toString()}
          placeholder={<Placeholder />}
        />
      </AvatarInfoBlock>
      <AvatarInfoBlock>
        <CustomizeUpload {...props}>
          <Button size="large" type="primary" icon={<UploadOutlined />}>
            Upload new photo
          </Button>
        </CustomizeUpload>
      </AvatarInfoBlock>
    </ImageContainer>
  );
};

export default ProfileAvatar;
