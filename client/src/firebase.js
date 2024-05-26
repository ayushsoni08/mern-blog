// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cf4d2.firebaseapp.com",
  projectId: "mern-blog-cf4d2",
  storageBucket: "mern-blog-cf4d2.appspot.com",
  messagingSenderId: "946015495871",
  appId: "1:946015495871:web:0f1522ec220d839f14480a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);