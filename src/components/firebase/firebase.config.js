// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0vd7qEReWNE0fDEXw7OcL4wB-cf6QbhA",
  authDomain: "emajhonwithfirebaseauth.firebaseapp.com",
  projectId: "emajhonwithfirebaseauth",
  storageBucket: "emajhonwithfirebaseauth.appspot.com",
  messagingSenderId: "368756162896",
  appId: "1:368756162896:web:8e623fa66b105294e82c55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;