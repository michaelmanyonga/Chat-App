// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrtjQKkbvXlQAdD7odbT8hkLqggson0H0",
  authDomain: "chat-app-4db07.firebaseapp.com",
  projectId: "chat-app-4db07",
  storageBucket: "chat-app-4db07.appspot.com",
  messagingSenderId: "230225346038",
  appId: "1:230225346038:web:7b6c8cb0a0b91f90369bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)