const resultado = document.getElementById("resultado");
const botao = document.getElementById("btnBuscar");

async function buscarPessoas() {
  resultado.innerHTML = "Carregando...";

  try {
    const resposta = await fetch("./pessoas.json");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar os dados.");
    }

    const pessoas = await resposta.json();
    renderizarPessoas(pessoas);
  } catch (erro) {
    resultado.innerHTML = `<p>Erro: ${erro.message}</p>`;
    console.error(erro);
  }
}

function renderizarPessoas(pessoas) {
  if (!pessoas.length) {
    resultado.innerHTML = "<p>Nenhum cadastro encontrado.</p>";
    return;
  }

  const lista = document.createElement("ul");

  pessoas.forEach((pessoa) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${pessoa.nome}</strong> - CPF: ${pessoa.cpf} - Idade: ${pessoa.idade}`;
    lista.appendChild(item);
  });

  resultado.innerHTML = "";
  resultado.appendChild(lista);
}

botao.addEventListener("click", buscarPessoas);
buscarPessoas();
