// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9r6uefSEd8wYh-6cng5PzdoodHv1KmUo",
  authDomain: "satguru-b2683.firebaseapp.com",
  projectId: "satguru-b2683",
  storageBucket: "satguru-b2683.appspot.com",
  messagingSenderId: "717142571422",
  appId: "1:717142571422:web:41e121c736837ad5c47e8f"
};

// ✅ Initialize Firebase once
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth
export const auth = getAuth(app);
export const db = getFirestore(app);
