const Dom = {
    selector: 'li',
    element() {
        return document.querySelector(this.selector);
        // return elementoSelecionado;
        // console.log(this.selector)
    },
    ativar(){
        const elementoSelecionado = document.querySelector(this.selector);
        elementoSelecionado.classList.add('ativar');
    }
}