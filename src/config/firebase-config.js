import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBS61sr7SgM8qKLmJpa8zLk_KJiF6rK7j0",
    authDomain: "lazaruslawal.firebaseapp.com",
    projectId: "lazaruslawal",
    storageBucket: "lazaruslawal.appspot.com",
    messagingSenderId: "415585892044",
    appId: "1:415585892044:web:79e3be3156da16bae1f469",
    measurementId: "G-Z011RTJ99T"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
