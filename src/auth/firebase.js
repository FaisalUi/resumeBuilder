// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const API_KEY = import.meta.env.VITE_API_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "react-firebase-c3809.firebaseapp.com",
  projectId: "react-firebase-c3809",
  storageBucket: "react-firebase-c3809.firebasestorage.app",
  messagingSenderId: "297353026846",
  appId: "1:297353026846:web:55be356e66f6f457b1fd0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);