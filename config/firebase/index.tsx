import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSEWsGWCgldE-jwn7nWS7IVz1w9-IPosA",
  authDomain: "dibi-mm.firebaseapp.com",
  projectId: "dibi-mm",
  storageBucket: "dibi-mm.appspot.com",
  messagingSenderId: "810383526935",
  appId: "1:810383526935:web:d3842067ba3e7f35d76052",
  measurementId: "G-K0PZGGQFCD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export default app;

export { auth, db, storage };
