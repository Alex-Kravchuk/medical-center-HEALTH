import { ref, child, get } from "firebase/database";
import { database } from ".";

export const getDataFromDataBase = async (path) => {
  let data;
  const dbRef = ref(database);
  await get(child(dbRef, path))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());

        data = await snapshot.val();
        console.log(data, "data");
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return data;
};
