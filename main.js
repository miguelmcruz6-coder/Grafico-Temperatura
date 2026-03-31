// main.js
import { salvar, deletar } from "./crud.js";

// elementos do DOM
const canva = document.getElementById("grafico-temperatura");
const iniciar = document.getElementById("botao-iniciar");
const parar = document.getElementById("botao-parar");

let temporarisador = null;
let continuar = false
let temperatura = null

// Cadastrar ou atualizar
iniciar.addEventListener("click", async () => {
  continuar = true
  temporarisador = 5000
  while(continuar){
    temperatura = Math.floor(Math.random() * (30 - 35))

  }
});

// Filtrar enquanto digita
buscaInput.addEventListener("input", () =>
  atualizarLista(buscaInput.value.toLowerCase())
);

// Função para renderizar um único item
function renderItem(id, p, filtro) {
  if (!p.nome.toLowerCase().includes(filtro)) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span><strong>${p.nome}</strong> — ${p.idade} anos - Gênero: ${p.genero}</span>
    <div>
      <button class="btn-editar">Editar</button>
      <button class="btn-excluir">Excluir</button>
    </div>
  `;

  // editar
  li.querySelector(".btn-editar").addEventListener("click", () => {
    nomeInput.value = p.nome;
    idadeInput.value = p.idade;
    generoInput.value = p.genero || "";
    idEditando = id;
    btnSalvar.textContent = "Atualizar";
  });

  // excluir
  li.querySelector(".btn-excluir").addEventListener("click", async () => {
    if (confirm("Excluir este cadastro?")) {
      try {
        await deletar(id);
        await atualizarLista(filtro);
      } catch (err) {
        console.error("Erro ao excluir:", err);
        alert("Ocorreu um erro ao excluir o cadastro.");
      }
    }
  });

  lista.appendChild(li);
}

// Função para listar dados no DOM, com filtro simples
async function atualizarLista(filtro = "") {
  try {
    const dados = await buscarTodos();
    lista.innerHTML = "";

    // Itera sobre os dados e aplica o filtro no nome
    for (let id in dados) {
      const pessoa = dados[id];

      // Filtro de nome
      if (pessoa.nome.toLowerCase().includes(filtro.toLowerCase())) {
        renderItem(id, pessoa, filtro);
      }
    }
  } catch (err) {
    console.error("Erro ao buscar dados:", err);
    alert("Não foi possível carregar a lista.");
  }
}

// Carregar lista ao abrir a página
window.addEventListener("load", () => atualizarLista());