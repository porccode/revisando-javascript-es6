const Dom = {
    selector: 'li',
    element() {
        return document.querySelector(this.selector);
        // return elementoSelecionado;
        // console.log(this.selector)
    },
    ativar(){
        // const elementoSelecionado = document.querySelector(this.selector);
        // elementoSelecionado.classList.add('ativar');
        this.element().classList.add('ativar');
    }
}

Dom.ativar();

Dom.seletor = 'ul';
Dom.ativar();