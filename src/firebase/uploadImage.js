import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from ".";

// загружаю фото
// добавити placeholder коли немає фотки на акаунті

const metadata = {
  contentType: "image/jpeg",
};

export const uploadImage = async (file, saveUrl) => {
  console.log("start uploading");
  let url;

  const storageRef = ref(storage, "images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + " % done");

      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      console.log("ERRROR", error.code);

      switch (error.code) {
        case "storage/unauthorized":
          break;
        case "storage/canceled":
          break;
        case "storage/unknown":
          break;
      }
    },
    async () => {
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at ", downloadURL);
        saveUrl(downloadURL);
      });
    }
  );
};
