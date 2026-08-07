function Button(text, backgroun) {
    this.text = text;
    this.background = background;
}

Button.prototype.render = function() {
    const button = document.createElement('button');
    button.textContent = this.text;
    button.style.backgroundColor = this.background;
    return button;
}

const blueButton = new Button('Comprar', 'blue');

//primeiro erro!
