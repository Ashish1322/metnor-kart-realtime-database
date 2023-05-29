// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP__7lqy9aBGjo2HVxgHjWhEX69PhsVQ8",
  authDomain: "temp-project-5779c.firebaseapp.com",
  projectId: "temp-project-5779c",
  storageBucket: "temp-project-5779c.appspot.com",
  messagingSenderId: "766017024852",
  appId: "1:766017024852:web:0c8e35d652f53f63f88ec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}
