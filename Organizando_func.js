/*Organizando funções

Agora nosso código principal vai sempre estar dentro da função Main
assim como em C

As funções extras serão criadas fora da função principal

Elas serão utilizadas dentro da MAIN quando necessarais

EXEMPLO:

function calcularJuros(){
   
}

function main() {
    console.log('Programa Principal');
    calcularJuros();
}

main();
*/

//Transformando o EXERCICIO DE IMC em um código com funções

function calcularIMC(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30){
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40){
        return 'Obeso'; 
    } else {
        return 'Obesidade Grave'; 
    }
}

function main() {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));

}

main();

//Funções no JS são valores também, como se fossem objetos que conseguimos manipular
//A Função é nada mais nada menos doq um objeto
//Elas se comportam como qualquer valor que eu colocar neles

const main2 = main;
console.log(main2);

main2();

//Também é possivel reatribuir uma nova Função para alguma função existente;
//EXEMPLO

main = function() {
    console.log(1);
}

main();

/*função imediatamente invocada

(function () {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));

})();

Ela é colocada entre parenteses seguindo a lógica da operação matematica,
resolvendo o que tem dentro da função e assumir esse valor

Os pareteses logo após a função indicam que
ela ja está sendo chamada logo na sequencia, por isso imediatamente invocada;

No caso desse tipo de função é possivel até tirar o nome dela
afinal não tem pq referenciar ela do lado de fora, pois esse
codigo é feito para ser executado 1 vez só
*/
