var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

for (var i = 0; i < brasilCampeao.length; i++) {
    console.log("O Brasil foi campeão em: " + brasilCampeao[i]);
}

var frutas = ["Banana", "Maçã", "Uva", "Pera"];
for (var fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if(frutas[fruta] === "Uva") {
        break;
    }
}