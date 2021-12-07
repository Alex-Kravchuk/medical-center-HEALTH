import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from ".";

export const signIn = async (email, password) => {
  let response;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user, "suc");
      response = user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      response = errorMessage;
      console.log(errorMessage, "er");
    });

  return response;
};

export const signUp = async (email, password) => {
  let response;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user, "suc");
      response = user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      response = errorMessage;
      console.log(errorMessage, "er");
    });

  return response;
};

export const signOutHandler = () => {
   signOut(auth)
    .then((response) => {
      console.log(response, "suc");
    })
    .catch((error) => {
      console.log(error, "err");
    });

};
