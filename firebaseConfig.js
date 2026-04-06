// Import do Firebase modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

// Config do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyCVkXIDp9yWHdDRC4PKe4D7Nnx5ljmm2vE",
  authDomain: "grafico-teste-c7260.firebaseapp.com",
  databaseURL: "https://grafico-teste-c7260-default-rtdb.firebaseio.com",
  projectId: "grafico-teste-c7260",
  storageBucket: "grafico-teste-c7260.firebasestorage.app",
  messagingSenderId: "825620153324",
  appId: "1:825620153324:web:332292488461fb5b3ff6c9"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Realtime Database
const db = getDatabase(app);

export { db };
