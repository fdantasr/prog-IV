class Produto {
  constructor(public nome: string, public preco: number) {}

  aumento(quantia: number) {
    this.preco += quantia;
  }
}

class Camiseta extends Produto {
  constructor(nome: string, preco: number, public cor: string) {
    super(nome, preco);
  }
}


export default 1;