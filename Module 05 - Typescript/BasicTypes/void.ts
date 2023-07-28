function countSemRetorno(...args: number[]): void {
  console.log(args.join(' '));
  console.log(args.length);
}

countSemRetorno(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

const pessoa = {
  nome: 'Felipe',
  sobrenome: 'Dantas',
  idade: 30,
  exibirNome(): void {
  console.log(this.nome + ' ' + this.sobrenome);
  }
};
 /* Se eu usar console.log Irá retornar Felipe Dantas e undefined pois ele também retorna o valor de retorno da função
console.log(pessoa.exibirNome());*/
pessoa.exibirNome();