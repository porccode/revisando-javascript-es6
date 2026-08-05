// const Dom = {
//     selector: 'li',
//     element() {
//         return document.querySelector(this.selector);
//         // return elementoSelecionado;
//         // console.log(this.selector)
//     },
//     ativar(){
//         // const elementoSelecionado = document.querySelector(this.selector);
//         // elementoSelecionado.classList.add('ativar');
//         this.element().classList.add('ativar');
//     }
// }

function Dom(selector) {
    // this.selector = selector;
    this.element = function() {
        return document.querySelector(selector);
        // return elementoSelecionado;
        // console.log(this.selector)
    },
    this.ativar = function(){
        // const elementoSelecionado = document.querySelector(this.selector);
        // elementoSelecionado.classList.add('ativar');
        this.element().classList.add('ativar');
    }
}

const li = new Dom('li');

// Dom.ativar();

// Dom.seletor = 'ul';
// Dom.ativar();