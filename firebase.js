// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvC_cPCD2QLroCrCbBzkAlWJ1_l2984Is",
  authDomain: "uber-next-clone-live-64a23.firebaseapp.com",
  projectId: "uber-next-clone-live-64a23",
  storageBucket: "uber-next-clone-live-64a23.appspot.com",
  messagingSenderId: "185805385435",
  appId: "1:185805385435:web:8cff66cc8964ef28bc26fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();


export {app, provider, auth};
