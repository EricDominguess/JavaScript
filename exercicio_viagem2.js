/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoGasolina = 5.79;
const precoEtanol = 3.89;
const distanciaKM = 100;
const consumoMedioCombustivel = 10;
let eGasolina = false;
let tipo = '';
/*A string no JS pode ser definida com aspas simples, aspas duplas
e com a crase, usa-se mais as aspas simples e crase, tendo em vista
que as aspas duplas serão usadas com mais frequencia no html
*/
const LitrosGastos = distanciaKM / consumoMedioCombustivel;

if (eGasolina === true) {
    eGasolina = precoGasolina;
    tipo = "gasolina";
} else if (eGasolina === false) {
    eGasolina = precoEtanol;
    tipo = "etanol"
}

const gasto = LitrosGastos * eGasolina;

console.log('O valor de ' + tipo + ' gasto foi de: R$' + gasto.toFixed(2));

/* Solução com auxilio do professor 

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2)); 
}

No caso da solução apresentada na aula a saida do programa
era printada de dentro da condicional, por causa da regra da linguagem
em que o const e o let não deixam vazar o escopo da variavel valorGasto,
o escopo da variavel valorGasto é somente dentro do bloco de condicional,
logo o cada condição ali tem que ter um console.log dentro do bloco
para que a variavel possa ser usada pela função . */