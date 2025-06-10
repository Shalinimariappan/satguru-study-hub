// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoR-g20oW3aszUcz5kT9f0zUX__4kps0w",
  authDomain: "satgurunotes-35e90.firebaseapp.com",
  projectId: "satgurunotes-35e90",
  storageBucket: "satgurunotes-35e90.appspot.com",
  messagingSenderId: "717928643095",
  appId: "1:717928643095:web:5a721c86527ffcca9afa52",
};

const app = initializeApp(firebaseConfig);

// ✅ Export auth instance
export const auth = getAuth(app);
