// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhryuf8M5CqS4BTVk91I2J11caJNacSyk",
  authDomain: "hari-portfolio-9c320.firebaseapp.com",
  projectId: "hari-portfolio-9c320",
  storageBucket: "hari-portfolio-9c320.firebasestorage.app",
  messagingSenderId: "178703764577",
  appId: "1:178703764577:web:50534ce8daad653994ee20",
  measurementId: "G-5W3CM7GG3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);