//Aula 2 Booleanos e condicionais

//Variaveis booleanas
const azul = true;
const azul2 = false;

//Exemplo com resto de divisão
const numero = 3;
//No javascript o mais usado para igualdade é o de 3 iguais "==="
const NumeroPar = (numero % 2) === 0;
//O 2 iguais "==" ignora o tipo do valor, ele converte para o tipo que ele ta comparando
//ele faz uma conversão implicita, é usado quando você quer ignorar o tipo do valor
console.log(NumeroPar);

//Operadores Condicionais

/*Aqui o condicional if é usado para testar uma condição.
  Que nesse caso seria se o número é realmente par.
  Em outras palavras se a expressão escrita resulta em um valor TRUE,
  Ou seja, um valor verdadeiro */

if (NumeroPar) {
    console.log("Executei");
    console.log("Par");
    //Essa função só será executada se a variavel dentro dos parenteses for True
} else {
    console.log("Impar");
    //Nesse caso eu estou colocando uma condição para caso der falso
    //O simbolo de exclamação para testar isso, pois ela inverte o valor do booleano
    //Seria o mesmo de escrever (NumeroPar == False)
}

const NumeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log("O número é inválido")
    //Aqui está barrando o programa de continuar caso o numero for 0
} else if (NumeroDivisivelPor5) {
    console.log("É divisivel por 5");
    /*Aqui agora a condição está testando se o numero é divisivel por 5
    O else if ele testa outra condição especifica logo em seguida dependendo do primeiro if
    Ele depende do primeiro if, pois se o programa entrar no primeiro
    ele não vai tentar as outras condições*/
} else {
    console.log("Não é divisivel por 5");
    //Em caso de nenhuma das outras condições forem TRUE ele executa o else
}