// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi2kv389yc8Hzdb2o7v8SfqrfuRQ-Bucw",
  authDomain: "chatme-f7cc6.firebaseapp.com",
  projectId: "chatme-f7cc6",
  storageBucket: "chatme-f7cc6.firebasestorage.app",
  messagingSenderId: "871601726471",
  appId: "1:871601726471:web:499ab94b38b097bc35f6a2",
  measurementId: "G-9JR1BF5L2S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);