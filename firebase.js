// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyCnQjawfsPLcF_tP2uyZ9HFhoTRIpqJ49U",
  authDomain: "assignment-portal-ce1dc.firebaseapp.com",
  projectId: "assignment-portal-ce1dc",
  storageBucket: "assignment-portal-ce1dc.firebasestorage.app",
  messagingSenderId: "288827221485",
  appId: "1:288827221485:web:5be97d2e15f136ad0973e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
const db = getFirestore(app);

export { db };
