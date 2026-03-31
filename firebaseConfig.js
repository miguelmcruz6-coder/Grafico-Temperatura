
// Import 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
  
// Firebase configurationl
const firebaseConfig = {
  apiKey: "AIzaSyCVkXIDp9yWHdDRC4PKe4D7Nnx5ljmm2vE",
  authDomain: "grafico-teste-c7260.firebaseapp.com",
  projectId: "grafico-teste-c7260",
  storageBucket: "grafico-teste-c7260.firebasestorage.app",
  messagingSenderId: "825620153324",
  appId: "1:825620153324:web:332292488461fb5b3ff6c9",
  measurementId: "G-7623E5S7FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Exporta apenas o banco de dados
export { database };

