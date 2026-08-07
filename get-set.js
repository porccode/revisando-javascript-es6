const button = {
    get element() {
        return this._element;
    },
    set element(tipo) {
        this.element = document.createElement(tipo);
    }
}

button.element = "button";
button.element;