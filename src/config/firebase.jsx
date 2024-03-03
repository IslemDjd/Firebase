/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDiPe3oqJSLMPGDjLzoo_Ejc2MSfyF8GgM",
  authDomain: "islemdj-firebase.firebaseapp.com",
  projectId: "islemdj-firebase",
  storageBucket: "islemdj-firebase.appspot.com",
  messagingSenderId: "839958761796",
  appId: "1:839958761796:web:17a25b39f1a5bb4ed10711",
  measurementId: "G-HTRDVQDYVZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = new getFirestore(app);
export const storage = getStorage(app);
