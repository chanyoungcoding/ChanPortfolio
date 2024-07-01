// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMCbP9skMGRWJypyHMu1mXUGGpKkPQFag",
  authDomain: "chanportfolio-281c4.firebaseapp.com",
  projectId: "chanportfolio-281c4",
  storageBucket: "chanportfolio-281c4.appspot.com",
  messagingSenderId: "338127097003",
  appId: "1:338127097003:web:c9e94610ee4b0541623bee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);