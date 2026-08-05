function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}

const joao = new Pessoa('João', 30);
joao.falar(); 

const maria = new Pessoa('Maria', 25);
maria.falar();

console.log(joaoa.apresentar()); 
console.log(maria.apresentar());