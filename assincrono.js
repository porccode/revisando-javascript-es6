function elaAparece(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ela apareceu na minha frente!");
            resolve();
        }, 1000);
    })
}

function checaHumor() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const gosta = Math.random() > 0.5;
            resolve(gosta);
        }, 500);
    })
}

function dizAmor(gosta) {
    if (gosta) {
        console.log("EU TE AMO");
    }else {
        console.log("EU TE AMO MUITO MAIS");
    }
}

async function encontroComEla() {
    await elaAparece();
    const elaGosta = await checaHumor();
    dizAmor(elaGosta);
}

encontroComEla();