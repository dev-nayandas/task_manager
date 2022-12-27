// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLSl0j87RvYFsGlWIShFVrXzoJJGIVYAM",
  authDomain: "task-manager-13fed.firebaseapp.com",
  projectId: "task-manager-13fed",
  storageBucket: "task-manager-13fed.appspot.com",
  messagingSenderId: "794500320011",
  appId: "1:794500320011:web:dba776875f1b2a6e18f00e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;