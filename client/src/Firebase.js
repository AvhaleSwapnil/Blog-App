// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-990a1.firebaseapp.com",
  projectId: "blog-app-990a1",
  storageBucket: "blog-app-990a1.firebasestorage.app",
  messagingSenderId: "514347893272",
  appId: "1:514347893272:web:1c8bb7aba1cc5edc43396d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
