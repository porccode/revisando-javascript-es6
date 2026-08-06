function elaAparece() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ela apareceu na minha frente!");
            resolve();
        }, 1000);
    });
}

function verificaSeElaAbracou() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const elaAbracou = Math.random() > 0.5;

            if (elaAbracou) {
                console.log("Ela me abraçou!");
            } else {
                console.log("Ela não me abraçou.");
            }

            resolve(elaAbracou);
        }, 500);
    });
}

function dizAmor(elaAbracou) {
    if (elaAbracou) {
        console.log("EU TE AMO MUITO MAIS");
    } else {
        console.log("EU TE AMO");
    }
}

async function encontroComEla() {
    await elaAparece();

    const elaMeAbracou = await verificaSeElaAbracou();

    dizAmor(elaMeAbracou);
}

encontroComEla();

//simulação corrigida