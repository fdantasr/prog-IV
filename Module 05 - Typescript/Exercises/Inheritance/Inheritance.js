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

Novamente, vamos continuar usando o termo "Herança", mas achei que seria interessante que você soubesse disso neste momento.



 Esses conceitos específicos de herança baseada em protótipos em JavaScript se tornaram menos comuns no código moderno de JavaScript e TypeScript, principalmente devido à introdução da sintaxe de classe com ES6 (ECMAScript 2015).

As classes em JavaScript são basicamente um açúcar sintático que facilita a escrita de código baseado em protótipos e orientado a objetos. Elas oferecem uma forma muito mais simples e fácil de lidar com herança e construção de objetos, comparado ao uso direto de protótipos e funções construtoras.

Por exemplo, o código que você postou poderia ser reescrito usando classes da seguinte maneira:

javascript
Copy code
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aumento(quantia) {
    this.preco += quantia;
  }
}

class Camiseta extends Produto {
  constructor(nome, preco, cor) {
    super(nome, preco);
    this.cor = cor;
  }
}
Nesse exemplo, a classe Camiseta estende a classe Produto, o que significa que ela herda todas as propriedades e métodos de Produto. Usamos a palavra-chave super para chamar o construtor da classe pai.

Embora a herança baseada em protótipos ainda seja a base do modelo de objeto em JavaScript, e é útil entender como ela funciona, na maioria dos casos, você encontrará a sintaxe de classe sendo usada em código moderno de JavaScript e TypeScript. */