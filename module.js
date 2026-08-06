// exemplo do module

export function CriarCaixa(sabor, quantidade, preco) {
    return {
        sabor,
        quantidade,
        preco
    }
}

export function descreverCaixa(caixa) {
    console.log(`Caixa de bala sabor ${caixa.sabor}: ${caixa.quantidade} unidades, preço: R$${caixa.preco.toFixed(2)}`);
}

export const precoPadrao = 2.50;

// o arquivo abaixo é exemplo para outro arquivo js

import {CriarCaixa, descreverCaixa, precoPadrao } from './module.js';
const caixa1 = CriarCaixa('morango', 10, precoPadrao);
descreverCaixa(caixa1);


