// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZvryWvnbROUblLHfzItc1UqPd4EaBSnA",
  authDomain: "tawjihy-auth.firebaseapp.com",
  projectId: "tawjihy-auth",
  storageBucket: "tawjihy-auth.appspot.com",
  messagingSenderId: "426541676683",
  appId: "1:426541676683:web:8edd83b698cd357215bc8e",
  measurementId: "G-PRYBYXVJKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };