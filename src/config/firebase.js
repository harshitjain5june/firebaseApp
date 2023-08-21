// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3MovW-Blhdvh2PK3Npgyl_FC1X-vQiYg",
  authDomain: "first-firebase-app-b7240.firebaseapp.com",
  projectId: "first-firebase-app-b7240",
  storageBucket: "first-firebase-app-b7240.appspot.com",
  messagingSenderId: "5476992905",
  appId: "1:5476992905:web:02da5ca328df077ccd4358",
  measurementId: "G-BNQNPJRCG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
