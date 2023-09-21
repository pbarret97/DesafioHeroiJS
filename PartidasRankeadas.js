function calcSaldoRankeadas(numVitorias, numDerrotas) {
    let saldoPartidas = numVitorias - numDerrotas;
    return saldoPartidas
}

let resultadoPartidas = calcSaldoRankeadas(271, 9)

let nivelHeroi;

if (resultadoPartidas <= 10) {
    nivelHeroi = "Ferro"
} else if (resultadoPartidas > 10 && resultadoPartidas <= 20 ) {
    nivelHeroi = "Bronze"
} else if (resultadoPartidas > 20 && resultadoPartidas <= 50 ) {
    nivelHeroi = "Prata"
} else if (resultadoPartidas > 50 && resultadoPartidas <= 80 ) {
    nivelHeroi = "Ouro"
} else if (resultadoPartidas > 80 && resultadoPartidas <= 90 ) {
    nivelHeroi = "Diamante"
} else if (resultadoPartidas > 90 && resultadoPartidas <= 100 ) {
    nivelHeroi = "Lendario"
} else if (resultadoPartidas >= 101 ) {
    nivelHeroi = "Imortal"
}

console.log(" O herói tem saldo de " + resultadoPartidas + " e está no nível de " + nivelHeroi)


