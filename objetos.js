/* Exemplos de objeto

console (objeto, variavel do tipo console)
.log (é o metodo do objeto, que é a função do console)
 

Um objeto literal é composto por valores literais,
é possivel fazer, por exemplo, uma coleção de dados como a abaixo:

const eric = {
    nome: 'Eric Domingues de Souza',
    idade: 19
};

para acessar o valor eu posso fazer da seguinte forma:

console.log(eric.nome);
console.log(eric.idade);
console.log(eric);

Uma vez definido o objeto literal eu posso incrementar ele dinamicamente
como por exemplo:

eric.altura = 1.70;
console.log(eric); #para mostrar a altura e todos as outras informações

também é possivel remover informações dinamicamente, como:

delete eric.nome;
console.log(eric);

agora irá exibir sem o nome, pois ele foi excluido

No JS é possivel utilizar funções, que dentro de um objeto é chamada de metodo
por exemplo o metodo descrever:

const pessoa = {
    nome: 'Eric Domingues de Souza',
    idade: 19,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        #aqui para utilizar o 'this' é necessario usar aspas invertidas
        #pois aspas simples não consegue interpretar o comando this
    }
}

A vantagem da função dentro do objeto é que no caso de eu querer
alterar os dados da pessoa a função descrever ainda vai fazer
o trabalho dela como deveria, e não vou precisar de varios
console.log para mostrar os dados

Assim como os outros dados eu também posso substituir/sobrepor
a função que esta dentro do objeto da seguinte forma, por exemplo:

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

É possivel acessar esses valores atraves de uma sintaxe mais 
dinamica, como por exemplo:

const atributo = 'idade';

console.log(pessoa[atributo]); (acessando a ideade)

const atributo = 'Nome';

console.log(pessoa[atributo]); (acessando o nome)

As notações acima são de coleção, mas também posso reatribuir como teste
por exemplo

pessoa['nome'] = 'teste'; (Aqui o código vai pegar a string teste e colocar dentro do atributo de pessoa)
pessoa.nome = 'teste'; (essa é a forma direta, a de cima é a forma dinamica)
*/

const pessoa = {
    nome: 'Eric Domingues de Souza',
    idade: 19,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

pessoa.descrever();

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.altura = 1.70;
console.log(pessoa);

delete pessoa.nome;
console.log(pessoa);

const atributo = 'idade';

console.log(pessoa[atributo]);