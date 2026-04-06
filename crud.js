import { db } from "./firebaseConfig.js";
import { ref, push, remove } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

// 🔹 Salvar temperatura
export async function salvarTemperatura(temp) {
  try {
    const referencia = ref(db, "temperaturas");
    await push(referencia, {
      valor: temp,
      data: new Date().toISOString()
    });
  } catch (erro) {
    console.error("Erro ao salvar:", erro);
  }
}

// 🔹 Deletar todas as temperaturas
export async function limparTemperaturas() {
  try {
    const referencia = ref(db, "temperaturas");
    await remove(referencia);
  } catch (erro) {
    console.error("Erro ao deletar:", erro);
  }
}


// "🔹 Salvar temperatura" recebe uma temperatura e adiciona essa temperatura junto com o tempo em que ela foi tirada no database 

// "🔹 Deletar todas as temperaturas" remove todas as temperaturas do database
