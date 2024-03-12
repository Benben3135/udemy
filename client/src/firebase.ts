// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfilL6OgsqxemghvmyCI2WBKfE4BK8okI",
  authDomain: "udemy-9376a.firebaseapp.com",
  projectId: "udemy-9376a",
  storageBucket: "udemy-9376a.appspot.com",
  messagingSenderId: "1028308364650",
  appId: "1:1028308364650:web:04d102b233f1fd1d630913",
  measurementId: "G-PTD5WPJ063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
