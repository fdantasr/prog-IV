class Produto {
  constructor(public nome: string, public preco: number) {}

  aumento(quantia: number) {
    this.preco += quantia;
  }
}

class Camiseta extends Produto {
  constructor(nome: string, preco: number, public cor: string) {
    super(nome, preco);
    this.cor = cor;
  }
}

export default 1;

/*Os conceitos específicos de herança baseada em protótipos em JavaScript se tornaram menos comuns no código moderno de JavaScript e TypeScript, principalmente devido à introdução da sintaxe de classe com ES6 (ECMAScript 2015).

As classes em JavaScript são basicamente um açúcar sintático que facilita a escrita de código baseado em protótipos e orientado a objetos. Elas oferecem uma forma muito mais simples e fácil de lidar com herança e construção de objetos, comparado ao uso direto de protótipos e funções construtoras.

Nesse exemplo, a classe Camiseta estende a classe Produto, o que significa que ela herda todas as propriedades e métodos de Produto. Usamos a palavra-chave super para chamar o construtor da classe pai.

Embora a herança baseada em protótipos ainda seja a base do modelo de objeto em JavaScript, e é útil entender como ela funciona, na maioria dos casos, você encontrará a sintaxe de classe sendo usada em código moderno de JavaScript e TypeScript. */