function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
    falar() {
      console.log(`Olá, meu nome é ${nome}`);
    }
  };
}

const pessoa1 = criarPessoa("Ana", 25);
const pessoa2 = criarPessoa("Bruno", 30);

pessoa1.falar();
pessoa2.falar();