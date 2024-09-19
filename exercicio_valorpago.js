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
const tipoPagamento = 4;
/*Tipo de pagamento seguindo a ordem da tabela de condição de pagamento.
  O 1 sendo débito, o 2 dinheiro ou pix e por ai vai*/

if (tipoPagamento === 1) {
    const Desconto = precoProduto_R$ * 0.1;
    const precoAlterado = precoProduto_R$ - Desconto;

    console.log('Tipo de pagamento: Débito');
    console.log('Valor do Produto: ' + precoProduto_R$);
    console.log('Valor pago: R$' + precoAlterado);
} else if (tipoPagamento === 2) {
    const Desconto = precoProduto_R$ * 0.15;
    const precoAlterado = precoProduto_R$ - Desconto;

    console.log('Tipo de pagamento: Dinheiro ou PIX');
    console.log('Valor do Produto: ' + precoProduto_R$);
    console.log('Valor pago: R$' + precoAlterado);
} else if (tipoPagamento === 3) {
    console.log('Tipo de pagamento: Em duas vezes');
    console.log('Valor do Produto: ' + precoProduto_R$);
    console.log('Valor pago: R$' + precoProduto_R$);
} else {
    const Desconto = precoProduto_R$ * 0.1;
    const precoAlterado = precoProduto_R$ + Desconto;

    console.log('Tipo de pagamento: Mais de duas vezes');
    console.log('Valor do Produto: ' + precoProduto_R$);
    console.log('Valor pago: R$' + precoAlterado);
}