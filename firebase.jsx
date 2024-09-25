// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMD34t8im7jqA4QLb4WfaPVOHeTYReycg",
  authDomain: "proyecto-antizo.firebaseapp.com",
  projectId: "proyecto-antizo",
  storageBucket: "proyecto-antizo.appspot.com",
  messagingSenderId: "150345699938",
  appId: "1:150345699938:web:be7872e3c8d083ecc0f73b",
  measurementId: "G-6PYJW9CEP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);