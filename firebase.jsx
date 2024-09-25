// firebase.js (Nuevo nombre más descriptivo)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importa el módulo de autenticación
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMD34t8im7jqA4QLb4WfaPVOHeTYReycg",
  authDomain: "proyecto-antizo.firebaseapp.com",
  projectId: "proyecto-antizo",
  storageBucket: "proyecto-antizo.appspot.com",
  messagingSenderId: "150345699938",
  appId: "1:150345699938:web:be7872e3c8d083ecc0f73b",
  measurementId: "G-6PYJW9CEP1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta la instancia de autenticación
const auth = getAuth(app);
export { auth };
