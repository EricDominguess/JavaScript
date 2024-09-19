/*
    Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a
    sua media e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3)/ 3;

    Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, aprovado;
*/

const nota_1 = 7;
const nota_2 = 7;
const nota_3 = 7;

const Media = (nota_1 + nota_2 + nota_3) / 3;

if (Media < 5) {
    console.log('A média do aluno foi de: ' + Media.toFixed(1) + ' pontos');
    console.log('O aluno está Reprovado!');
} else if (Media >= 5 && Media <= 7) {
    console.log('A média do aluno foi de: ' + Media.toFixed(1) + ' pontos');
    console.log('O aluno está de Recuperação!');
} else {
    console.log('A média do aluno foi de: ' + Media.toFixed(1) + ' pontos');
    console.log('O aluno está aprovado!');
}