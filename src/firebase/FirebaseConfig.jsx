// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5OkXKVE6zOzAgPMMfZJqOdPR8HGj5Ouc",
  authDomain: "myecom-f6776.firebaseapp.com",
  projectId: "myecom-f6776",
  storageBucket: "myecom-f6776.firebasestorage.app",
  messagingSenderId: "39055300437",
  appId: "1:39055300437:web:2ee6d4e693c4b95117c1dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export {auth,fireDB}