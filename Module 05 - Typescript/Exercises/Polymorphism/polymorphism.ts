class Conta {
  constructor(public agencia: number, public conta: number, public saldo: number) {}

  sacar(valor: number): void {
    if(valor > this.saldo){
      console.log("Saldo insuficiente");
      return;
    }
    this.saldo -= valor;
    this.verSaldo();
  }

  depositar(valor: number): void {
    this.saldo += valor;
    this.verSaldo();
  }

  verSaldo(): void {
    console.log(`Agencia/Conta: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`);
  }
}

const conta1 = new Conta(11, 1, 100);
conta1.depositar(200);
conta1.sacar(100);
console.log(conta1);

class ContaCorrente extends Conta {
  constructor(agencia: number, conta: number, saldo: number, public limite: number) {
    super(agencia, conta, saldo);
  }

  sacar(valor: number): void {
    if(valor > (this.saldo + this.limite)){
      console.log("Saldo insuficiente");
      return;
    }
    this.saldo -= valor;
    this.verSaldo();
  }
}

const contaCorrente = new ContaCorrente(11, 22, 0, 100);

class ContaPoupanca extends Conta {
  constructor(agencia: number, conta: number, saldo: number) {
    super(agencia, conta, saldo);
  }
}

const contaPoupanca = new ContaPoupanca(12, 33, 0);

export default 1;