class Conta {
  // variaveis de instancia pra diferir das dos metodos
  agencia: number;
  conta: number;
  saldo: number;

  constructor(agencia: number, conta: number, saldo: number) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }

  sacar(valor: number): void {
    if(valor > this.saldo ){
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
