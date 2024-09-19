//Criando Funções em JS

/*
Sintaxe:

function teste(parametros) {
    console.log('teste');
}

*/

function teste() {
    console.log('teste');
}

teste();

function sayMyName(name) {
    console.log('Your name is:', name);
}

sayMyName('Eric');
sayMyName('Katrina');

// Quando eu quero que a função me de retorno de algo se usa o return;

function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
console.log(quadrado(10) + quadrado(10));

function IncrementarJuros(valor,percentualJuros) {
    const valorDeAcrescimo = (percentualJuros/100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(IncrementarJuros(100,10));
console.log(IncrementarJuros(100,15));
console.log(IncrementarJuros(80,50));