import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBGZYoGJR7_vtyd7wpGGactoi2zbJZYf98",
  authDomain: "crpty-beb17.firebaseapp.com",
  projectId: "crpty-beb17",
  storageBucket: "crpty-beb17.appspot.com",
  messagingSenderId: "1093110742563",
  appId: "1:1093110742563:web:ef86f8848b5990b5a4bb96",
  measurementId: "G-736H3KKHSV"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
