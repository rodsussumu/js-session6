function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject )=> {
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

// Promise.all - Devolve um arrary de promises em um unico promise
const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
]
Promise.race(promises).then(function(valor) {
    console.log(valor);
}).catch(function(erro) {
    console.log(erro)
})
