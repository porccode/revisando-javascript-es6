class Veiculo {
  constructor(marca) {
    this.marca = marca;
  }

  ligar() {
    console.log("Veículo ligado");
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }

  acelerar() {
    console.log("Carro acelerando");
  }
}

const carro = new Carro("Honda", "Civic");
console.log(carro.marca);
console.log(carro.modelo);
carro.ligar();
carro.acelerar();
