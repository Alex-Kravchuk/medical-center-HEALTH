import React, { useEffect, useState } from "react";

import { Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import {
  AvatarInfoBlock,
  CustomizeUpload,
  ImageContainer,
} from "./ProfileAvatar.styled";
import Placeholder from "./Placeholder";
import { uploadImage } from "../../../../../firebase/uploadImage";
import { useDispatch, useSelector } from "react-redux";
import { CustomeImage } from "./ProfileAvatar.styled";

import photoNotFound from "../../../../../images/photo-not-found.png";
import { setDataToDataBase } from "../../../../../firebase/setDataToDataBase";
import { updateAvatarURL } from "../../../../../redux/authReducer/authReducer";

const ProfileAvatar = () => {
  const dispatch = useDispatch();
  const [avatarURLNotFound, setAvatarUrlNotFound] = useState(false);
  const { avatarURL, uid } = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!avatarURL) {
      setAvatarUrlNotFound(true);
    }
  });

  const saveUrl = (url) => {
    const path = "users/clients/" + uid + "/avatarURL";
    setDataToDataBase(path, url);
    dispatch(updateAvatarURL(url));
    setAvatarUrlNotFound(false);
  };

  const props = {
    name: "file",
    // винести функцію вигрузки фото сюди, пропси можна викинути в окремий файл. після успішного отримання юрл пушити його в базу (сетдата)
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
