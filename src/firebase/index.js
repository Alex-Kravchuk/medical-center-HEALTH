import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6hdRmyzXAJ2YCUspvS8GfsoNLWpUfiZE",
  authDomain: "medical-center-health.firebaseapp.com",
  databaseURL:
    "https://medical-center-health-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "medical-center-health",
  storageBucket: "medical-center-health.appspot.com",
  messagingSenderId: "907413987894",
  appId: "1:907413987894:web:441475e7d75ccecd3fae97",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const database = getDatabase(firebase);
export const auth = getAuth();
export const storage = getStorage();
