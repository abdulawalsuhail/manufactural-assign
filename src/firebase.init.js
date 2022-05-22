// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnU11KN6hNv1HjTGYQaNMYyT3UP6gS2E8",
  authDomain: "aas-electronics.firebaseapp.com",
  projectId: "aas-electronics",
  storageBucket: "aas-electronics.appspot.com",
  messagingSenderId: "749032417213",
  appId: "1:749032417213:web:773506518f99c9046254d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth