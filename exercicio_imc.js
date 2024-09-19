/*
    O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre
    a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura);

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

const peso_KG = 65;
const altura_M = 1.70;

const IMC = peso_KG / (altura_M * altura_M);

if (IMC < 18.5) {
    console.log('IMC: ' + IMC.toFixed(1));
    console.log('Condição: Abaixo do peso!');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('IMC: ' + IMC.toFixed(1));
    console.log('ECondição: Peso normal!');
} else if (IMC >= 25 && IMC < 30) {
    console.log('IMC: ' + IMC.toFixed(1));
    console.log('Condição: Acima do peso!');
} else if (IMC >= 30 && IMC < 40) {
    console.log('IMC: ' + IMC.toFixed(1));
    console.log('Condição: Obeso!');
} else {
    console.log('IMC: ' + IMC.toFixed(1));
    console.log('Condição: Obesidade Grave!');
}

/*
    Solução com auxilio do professor

    const peso = 65;
    const altura = 1.70;
    const imc = peso / Math.pow(altura,2);
    //O math aqui usado é uma biblioteca de utilitarios de funções matematicas
    //Nesse caso está sendo feita a potencia de altura ao quadrado

    if (imc < 18.5) {
        console.log('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        console.log('Peso normal');
    } else if (imc >= 25 && imc < 30){
        console.log('Acima do peso');
    } else if (imc >= 30 && imc < 40){
        console.log('Obeso'); 
    } else {
        console.log('Obesidade Grave'); 
    }
*/