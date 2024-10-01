// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSqKrMGHx0GM5dfN80b4j-4vV7ur9Xh0o",
  authDomain: "expenza-ccea9.firebaseapp.com",
  projectId: "expenza-ccea9",
  storageBucket: "expenza-ccea9.appspot.com",
  messagingSenderId: "62083507842",
  appId: "1:62083507842:web:87cfeb874a8988c40b369b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips')
export const expensesRef = collection(db, 'expenses')

export default app;