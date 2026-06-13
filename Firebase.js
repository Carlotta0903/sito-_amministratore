import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  get,
  onValue
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-4_iZumNW3scQtcgjmbp7GR4sorXWEfE",
  authDomain: "vending-machine-cdafa.firebaseapp.com",
  databaseURL: "https://vending-machine-cdafa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vending-machine-cdafa",
  storageBucket: "vending-machine-cdafa.firebasestorage.app",
  messagingSenderId: "452648423438",
  appId: "1:452648423438:web:e1f263b8d8172593806c5f"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export { ref, set, get, onValue };