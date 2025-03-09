// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2XsiYhJqC_n72_HgTN9qoJfUOe0ZOQPk",
  authDomain: "portfolio-e0a00.firebaseapp.com",
  projectId: "portfolio-e0a00",
  storageBucket: "portfolio-e0a00.firebasestorage.app",
  messagingSenderId: "1095057242677",
  appId: "1:1095057242677:web:4872533fdca11743d9cf7c",
  measurementId: "G-85XTFEZNJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);