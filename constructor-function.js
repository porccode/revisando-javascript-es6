// const carro = {
//     marca: 'Toyota',
//     preco: 30000,
// }

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 25000;

// const fiat = { ...carro,
//     marca: 'Fiat',
//     preco: 20000,
// }

function Carro(){
    this.marca = 'Toyota';
    this.preco = 30000;
}

const honda = new Carro();
const fiat = new Carro();
honda.marca = 'Honda';
honda.preco = 25000;
fiat.marca = 'Fiat';
fiat.preco = 20000;
