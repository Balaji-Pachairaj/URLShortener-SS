// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyCXtMBYIMuL0HRfskvx7udixPReD1qG_ng",
     authDomain: "slinkdatabase-4b4ce.firebaseapp.com",
     databaseURL: "https://slinkdatabase-4b4ce-default-rtdb.firebaseio.com",
     projectId: "slinkdatabase-4b4ce",
     storageBucket: "slinkdatabase-4b4ce.appspot.com",
     messagingSenderId: "905246437476",
     appId: "1:905246437476:web:866cd663e7c30aa87c6f71",
     measurementId: "G-L49FLBS1JT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
