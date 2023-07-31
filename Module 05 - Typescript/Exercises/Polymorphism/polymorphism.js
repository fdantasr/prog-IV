//Basicamente fazer um método herdado de uma classe pai que pode ser usado por vários objetos (filhos), mas que cada um pode ter uma implementação diferente a partir do método herdado, mas este é sem sobrescrever o método herdado. (Sobrecarga é quando você sobrescreve o método herdado)

function Conta(agenciar, conta, saldo) {

  //This são os valores que serão atribuidos ao novo objeto baseado no construtor
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;

}

//Cada função tem um objeto prototype que é um objeto que será herdado por todos os objetos criados a partir da função construtora

Conta.prototype.sacar = function (valor) {
  if(valor > this.saldo){
    console.log("Saldo insuficiente");
    return;
  }
  else{
  this.saldo -= valor;
  this.verSaldo();
  }
};
Conta.prototype.depositar = function (valor) {

  this.salso += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(`Agencia/Conta: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 1, 100);
conta1.depositar(200);
conta1.sacar(100);

console.log(conta1);

function ContaCorrente(agencia, conta, saldo, limite) {
  
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if(valor > (this.saldo + this.limite)){
    console.log("Saldo insuficiente");
    return;
  }
  else{

  this.saldo -= valor;
  this.verSaldo();
  }
};

const contaCorrente = new ContaCorrente(11, 22, 0, 100);

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(12, 33, 0);

export default 1;