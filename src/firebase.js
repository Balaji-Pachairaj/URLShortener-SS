// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, } from "firebase/database"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnNxilowpLO1xCIfTf5BDh1dWX86Y9y5s",
  authDomain: "viplinkmain.firebaseapp.com",
  databaseURL: "https://viplinkmain-default-rtdb.firebaseio.com",
  projectId: "viplinkmain",
  storageBucket: "viplinkmain.appspot.com",
  messagingSenderId: "496435445417",
  appId: "1:496435445417:web:0f05a06be279450a6cb3b8",
  measurementId: "G-45E9EHGZEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)
export const auth = getAuth(app)


