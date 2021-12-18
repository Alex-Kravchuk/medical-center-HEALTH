import { ref, set } from "firebase/database";
import { database } from ".";

export const setDataToDataBase = async (path, data) => {
  let response;
  await set(ref(database, path), data)
    .then(async (res) => {
      console.log("change data succsess", res);
      response = true;
    })
    .catch(async (res) => {
      console.log("change data with error", res);
      response = false;
    });

  return response;
};
