function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

function Camiseta(nome, preco, cor) {
  //A função call permite que você chame uma função definida em um objeto emprestado (Herança)
  Produto.call(this, nome, preco);
  this.cor = cor;
}
//Essas duas linhas estão configurando ContaCorrente para herdar de Conta, permitindo que instâncias de ContaCorrente usem propriedades e métodos definidos em Conta, ao mesmo tempo que mantêm a propriedade constructor correta.

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

/*Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype. Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para Produto.prototype (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo delegação como mais adequado para este comportamento.

Novamente, vamos continuar usando o termo "Herança", mas achei que seria interessante que você soubesse disso neste momento.*/

