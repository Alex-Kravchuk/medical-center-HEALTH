import { uploadImage } from "../../firebase/uploadImage";

export const useSetAvatarURL = (file) => {
  return uploadImage(file);
};
