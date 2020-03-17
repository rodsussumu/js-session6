function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject )=> {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toLocaleUpperCase() + 'PASSEI DA PROMISE');
            return;
        }, tempo)
    });
}

// Promise.all -> tenta resolver todas
// Promise.race -> tenta resolver e devolve a primeira que for resolvida
// Promise.resolve -> entrega promise resolvida
// Promise.reject -> entreja rejeitada e sempre cai no catch

const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)),
]

Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
}).catch(function(erro){
        console.log(erro);
})
