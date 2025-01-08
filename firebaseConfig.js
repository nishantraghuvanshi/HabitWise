// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7F-Q39TNiqBYIoTW382wEJ4p2PTgEnTU",
  authDomain: "habitwise-d09bb.firebaseapp.com",
  projectId: "habitwise-d09bb",
  storageBucket: "habitwise-d09bb.firebasestorage.app",
  messagingSenderId: "664605725919",
  appId: "1:664605725919:web:fca6ec97710da81546856a",
  measurementId: "G-4GR6HRZE2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const Firebase_auth = getAuth(app);
export const Firebase_DB = getDatabase(app);