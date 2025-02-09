// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLxA_omGbvtsNe6uY-zgdJtUe2wEZWSMI",
  authDomain: "valentine-20d2a.firebaseapp.com",
  projectId: "valentine-20d2a",
  storageBucket: "valentine-20d2a.firebasestorage.app",
  messagingSenderId: "636013255673",
  appId: "1:636013255673:web:dece9f63d9fd616da9bb28",
  measurementId: "G-N18ZQRCVBZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
export { db, auth, googleProvider };
