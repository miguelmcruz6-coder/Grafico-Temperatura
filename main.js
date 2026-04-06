import { salvarTemperatura, limparTemperaturas } from "./crud.js";

const canvas = document.getElementById("grafico-temperatura");

if (!canvas) throw new Error("Canvas não encontrado!");
if (typeof Chart === "undefined") throw new Error("Chart.js não carregou!");

const ctx = canvas.getContext("2d");
const iniciar = document.getElementById("botao-iniciar");
const parar = document.getElementById("botao-parar");
const limpar = document.getElementById("botao-limpar");

let temporizador = null;
let dados = [];
let labels = [];

// Criar gráfico
const grafico = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: "Temperatura (°C)",
      data: dados,
      borderColor: "red",
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { min: 30, max: 35 }
    }
  }
});

// Função de temperatura
function gerarTemperatura() {
  return Number((Math.random() * 5 + 30).toFixed(2));
}

// Iniciar
iniciar.addEventListener("click", () => {
  if (temporizador) return;

  temporizador = setInterval(async () => {
    const temp = gerarTemperatura();
    const tempo = new Date().toLocaleTimeString();

    dados.push(temp);
    labels.push(tempo);
    grafico.update();

    // 🔥 salva no Realtime Database
    await salvarTemperatura(temp);

  }, 2000);
});

// Parar
parar.addEventListener("click", () => {
  clearInterval(temporizador);
  temporizador = null;
});

// Limpar Histórico
limpar.addEventListener("click", async () => {
  // Limpa o gráfico localmente
  dados = [];
  labels = [];
  grafico.data.labels = labels;
  grafico.data.datasets[0].data = dados;
  grafico.update();

  // 🔥 Limpa também o Realtime Database
  await limparTemperaturas();
});
