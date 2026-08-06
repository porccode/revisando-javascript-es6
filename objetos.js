// criando um exemplo de um vendedor com caixas de bala no semáforo

class CaixaDeBala {
    constructor(sabor,quantidade, preco) {
        this.sabor = sabor;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    descrever() {
        console.log(`Caixa de bala sabor ${this.sabor}: ${this.quantidade} unidades, preço: R$${this.preco.toFixed(2)}`);
    }

    vender(n) {
        if (n > this.quantidade) {
            console.log("Não há balas suficientes nessa caixas!");
            return;
        }
        this.quantidade -= n;
        console.log(`Você vendeu ${n} balas. Restam ${this.quantidade} balas na caixa.`);
    }
}

const caixas = [
    new CaixaDeBala('morango', 10, 2.50),
    new CaixaDeBala('uva', 10, 2.50),
    new CaixaDeBala('coco', 10, 2.50),
    new CaixaDeBala('limão', 10, 2.50),
    new CaixaDeBala('uva verde', 10, 2.50),
    new CaixaDeBala('tutti-frutti', 10, 2.50),
    new CaixaDeBala('chocolate', 10, 2.50),
    new CaixaDeBala('caramelo', 10, 2.50),
    new CaixaDeBala('manga', 10, 2.50),
    new CaixaDeBala('menta', 10, 2.50),
];

caixas[0].descrever();
caixas[0].vender(3);
caixas[0].descrever();