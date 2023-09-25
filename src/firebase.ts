// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBheTdPyGouyP_xXa4zLgkoHl-lx_1gMOE",
  authDomain: "next-firebase-f8ef5.firebaseapp.com",
  projectId: "next-firebase-f8ef5",
  storageBucket: "next-firebase-f8ef5.appspot.com",
  messagingSenderId: "484289221713",
  appId: "1:484289221713:web:789316522b71fd49735470",
  measurementId: "G-SK0X4G654Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);