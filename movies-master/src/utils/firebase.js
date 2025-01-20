// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi1Yylm9Yjs5g4bQYJXxhf2-CAQlY5PYw",
  authDomain: "movies-master-622c6.firebaseapp.com",
  projectId: "movies-master-622c6",
  storageBucket: "movies-master-622c6.firebasestorage.app",
  messagingSenderId: "424734769624",
  appId: "1:424734769624:web:45099ebd344b2728ac32ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();