import { ref, set } from "firebase/database";
import { database } from ".";

export const setDataToDataBase = async (path, data) => {
  let response;
  await set(ref(database, path), data)
    .then(async (res) => {
      console.log("data changed successfully");
      response = true;
    })
    .catch(async (res) => {
      console.log("data hasn't been changed ");
      response = false;
    });
  return response;
};
