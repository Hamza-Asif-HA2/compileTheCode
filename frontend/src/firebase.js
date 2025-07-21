// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATPdKTQR3WelmeNsMGgSy3yK6f8nfL7Rk",
  authDomain: "compilethecode.firebaseapp.com",
  projectId: "compilethecode",
  storageBucket: "compilethecode.firebasestorage.app",
  messagingSenderId: "1005271738796",
  appId: "1:1005271738796:web:2791c89d9ba604493cb209",
  measurementId: "G-MXQBT1Y1CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);