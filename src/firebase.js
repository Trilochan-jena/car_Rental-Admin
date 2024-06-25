// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC5HVI4usFItVK3Tr0m9mFz5F7-n6b4_k",
  authDomain: "carrentt-45b7c.firebaseapp.com",
  projectId: "carrentt-45b7c",
  storageBucket: "carrentt-45b7c.appspot.com",
  messagingSenderId: "1078605915588",
  appId: "1:1078605915588:web:279d021b2439c8e01e3091",
  measurementId: "G-WK20XPTDP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;



