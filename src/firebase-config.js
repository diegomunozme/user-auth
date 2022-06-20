// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNVp1kFB9Rewwtd2aVLY-9i6rMCkmoabw",
  authDomain: "auth-turtotial.firebaseapp.com",
  projectId: "auth-turtotial",
  storageBucket: "auth-turtotial.appspot.com",
  messagingSenderId: "241324514293",
  appId: "1:241324514293:web:9bea8ecd38aa122fd85ebc",
  measurementId: "G-NNBP3MKH3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);