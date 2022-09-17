import { uploadImage } from "../../../../../firebase/uploadImage";

export const makeShorterImageName = (file, saveUrl) => {
	debugger
  const previousName = file.name.split("");
  let newName;
  const jpgType = /jpg/.test(file.name);
  const pngType = /png/.test(file.name);

  if (previousName.length > 10) {
    newName = previousName.slice(0, 10);
  } else {
    newName = previousName;
  }

  if (jpgType) {
    newName.push("....jpg");
    newName = newName.join("");
  }

  if (pngType) {
    newName.push("....png");
    newName = newName.join("");
  }

  return newName;
};
