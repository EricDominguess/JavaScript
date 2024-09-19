/*
function escrevaMeuNome(nome){
    console.log('Meu nome é:' , nome);
}

escrevaMeuNome('Eric');
escrevaMeuNome('Katrina');


function verificarIdade(idade){
    if(idade >= 18){
        console.log('maior de idade'); 
    }else{
        console.log('menor de idade');
    }
}

verificarIdade(17);
verificarIdade(18);

*/

/*
Dessa forma estou mesclando as duas funções

function escrevaMeuNome(nome){
    return 'Meu nome é: ' + nome;
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome('Katrina') , 'e maior de idade'); 
    }else{
        console.log(escrevaMeuNome('Eric') , 'e menor de idade');
    }
}

verificarIdade(17);
verificarIdade(18);

*/

/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição do pagamento.
    Utilize os código da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
    adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou no PIX, recebe 15% de desconto;
    3 - Em duas vezes, preco normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto_R$ = 100;
tipoPagamento = 4;

function criarDesconto(valor, desconto){
    return valor - (valor * (desconto / 100));
}

function criarJuros(valor, juros){
    return valor + (valor * (juros/100));
}

if (tipoPagamento === 1) {
    console.log('Tipo de pagamento: Débito');
    console.log('Valor do Produto: ' + precoProduto_R$);
    console.log('Valor pago: R$' + criarDesconto(precoProduto_R$,10));
} else if (tipoPagamento === 2) {
    console.log('Tipo de pagamento: Dinheiro ou PIX');
    console.log('Valor do Produto: ' + precoProduto_R$);
    console.log('Valor pago: R$' + criarDesconto(precoProduto_R$,15));
} else if (tipoPagamento === 3) {
    console.log('Tipo de pagamento: Em duas vezes');
    console.log('Valor do Produto: ' + precoProduto_R$);
    console.log('Valor pago: R$' + precoProduto_R$);
} else {
    console.log('Tipo de pagamento: Mais de duas vezes');
    console.log('Valor do Produto: ' + precoProduto_R$);
    console.log('Valor pago: R$' + (criarJuros(precoProduto_R$,10)));
}