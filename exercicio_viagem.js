/* Exercício 1 - Desafio viagem (conta aritmética)

Faça um programa para calcular o valor de uma vagem
Você terá 3 variáveis. Sendo elas:
 1 - Preço de Combustivel;
 2 - Gasto médio de combustivel do carro por KM;
 3 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar essa viagem
*/

//Declarando preço como uma constante pois ele nn vai mudar durante a execução
const precoCombustivel = 5.79;
//O consumo do carro também é uma constante no código
const consumoMedioCombustivel = 12;
//Assim como a distancia que não vai mudar durante o código
const distanciaKM = 1580;

//Fazendo o calculo de quanto combustivel foi gasto na distancia
let LitrosGastos = distanciaKM / consumoMedioCombustivel;
//fazendo o calculo de quantos reais foi gasto em combustivel
let gasto = LitrosGastos * precoCombustivel;

//Saída do programa informando o valor gasto em reais
//Função toFixed converte o valor para texto
//Essa função usa como parametro os numeros depois do ponto e arredonda
//O valor 2 é a quantidade de números que eu quero depois no ponto
console.log("valor gasto = R$" + gasto.toFixed(2));