import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDG0X7473wthvtflR2O2n3wsLj04fNp7-E",
  authDomain: "webcarros-1a8a7.firebaseapp.com",
  projectId: "webcarros-1a8a7",
  storageBucket: "webcarros-1a8a7.appspot.com",
  messagingSenderId: "557180932456",
  appId: "1:557180932456:web:2b75270164fc91790cc6dd",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
