// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
/*

the Firebase Authenticatio(auth) SDK provides methods to create and manage users that use their email addresses and passwords to sign in.
*/
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZVoGuUyZ62dBa64fvFDJ1hXRVBrOSWs0",
  authDomain: "chat-app-5cd67.firebaseapp.com",
  projectId: "chat-app-5cd67",
  storageBucket: "chat-app-5cd67.appspot.com",
  messagingSenderId: "839819301947",
  appId: "1:839819301947:web:d5f1503baff6274014781e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// creates firebase app that stores our firebase configuration for our project
//when we create a firebase project -> we get configuration object -> pass to this fucntion -> returns firebase instance ->
//-> this instance is how the firebase sdk knows how to connect to our spicific firebase backend   
//אובייקט שבאמצעותו הפיירבייס אסדיקיי יודע לתקשר עם הבסיס נתונים של הפרויקט שלך בבאקאנד
//=
///Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export const db = getFirestore(app)  // initilize the service
 
/*
משתנה שמייצג את החיבור שלנו לבסיס נתונים

*/