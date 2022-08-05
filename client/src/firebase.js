import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALZ0ZJ48KS-gUy1kSIF05umj_nyexaYuQ",
  authDomain: "book-buddy-21449.firebaseapp.com",
  projectId: "book-buddy-21449",
  storageBucket: "book-buddy-21449.appspot.com",
  messagingSenderId: "597525016517",
  appId: "1:597525016517:web:ac966fbd66a930ecc9e5ac"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
