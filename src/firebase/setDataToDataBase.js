import { ref, set } from "firebase/database";
import { database } from ".";

const db = database;

export const setDataToDataBase = (path, data) => {
  set(ref(db, path), data)
    .then((res) => console.log(res))
    .catch((res) => console.log(res));
};
