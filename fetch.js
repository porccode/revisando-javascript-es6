async function carregarDados() {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (!resposta.ok) {
      throw new Error('Erro na requisição: ' + resposta.status);
    }

    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error('Falha ao carregar dados:', erro);
  }
}

carregarDados();