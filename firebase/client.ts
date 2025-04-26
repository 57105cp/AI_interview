// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGjFY7noz8pwqhtONKpSjUeQ54vN0eh-Q",
  authDomain: "interviewprep-9c654.firebaseapp.com",
  projectId: "interviewprep-9c654",
  storageBucket: "interviewprep-9c654.firebasestorage.app",
  messagingSenderId: "281339890828",
  appId: "1:281339890828:web:cc0307d94d877f6991ffa9",
  measurementId: "G-0ZPTC3NK07"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
