import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoQsBsoCY7aVV8VqjE62Ld_iiKnP7Od58",
  authDomain: "clone-16d6b.firebaseapp.com",
  projectId: "clone-16d6b",
  storageBucket: "clone-16d6b.appspot.com",
  messagingSenderId: "634833158213",
  appId: "1:634833158213:web:150a56c72d4f74ef7e232c",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
