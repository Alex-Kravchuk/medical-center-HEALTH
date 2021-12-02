import axios from "axios";

export const requestToFireBase = async (
  enteredData,
  apiKey,
  rejectWithValue
) => {
  let data;
  await axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      enteredData
    )
    .then(async function (response) {
      console.log(response);
      data = await response;
    })
    .catch(async function (error) {
      console.log(error.response);
      data = await error.response;
      if (!error.response) {
        throw new Error("ZALUPA");
      }

      return rejectWithValue(data);
    });
  return data;
};
