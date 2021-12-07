import React from "react";

import { Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import doctor from "../../../../images/doctor.png";

import { CustomizeUpload, ImageContainer, Img } from "./Profile.styled";

const ProfileAvatar = () => {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
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
      <div>
        <Img src={doctor} alt="alt" />
      </div>
      <div>
        <CustomizeUpload {...props}>
          <Button size="large" type="primary" icon={<UploadOutlined />}>
            Upload new photo
          </Button>
        </CustomizeUpload>
      </div>
    </ImageContainer>
  );
};

export default ProfileAvatar;
