// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgux2XDZR8rk0Fi7x6e2KmWyC4hrZ9uxA",
  authDomain: "farmlease-95891.firebaseapp.com",
  projectId: "farmlease-95891",
  storageBucket: "farmlease-95891.appspot.com",
  messagingSenderId: "185323770887",
  appId: "1:185323770887:web:3aba656e9048bbed38c6a2",
  measurementId: "G-D82LW2LZGC"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const db = getFirestore();