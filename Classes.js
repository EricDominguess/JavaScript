/*
const vitor = {
    nome: 'Renan J Paula',
    idade: 30,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

Para evitar a repetição do código nós criamos uma classe.

A classe é o que deveria ser e a instância é a ocorrência desse fator, então o exemplo assim é a ocorrência.
*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    
    //Constructor é o que acontece quando uma pessoa é instanciada, é como se fosse uma base para não haver instancias vazias
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

/*Exemplo de de como instanciar com essa classe
const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;
*/

/*Com o constructor definido dentro da classe eu posso reduzir ainda mais a instância
const vitor = new Pessoa('Vitor J Guerra', 27);
const renan = new Pessoa('Renan J Paula', 32);

renan.descrever();
vitor.descrever();

console.log(vitor);
*/

//Utilizando o objeto para agragar diversos valores e fazer a comparação

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const vitor = new Pessoa('Vitor J Guerra', 27);
const renan = new Pessoa('Renan J Paula', 32);

compararPessoas(vitor, renan);