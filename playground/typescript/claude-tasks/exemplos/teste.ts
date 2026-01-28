// TypeScript (com private):
class Pessoa {
  // Propriedades públicas
  public nome: string;
  public idade: number;

  // Propriedades privadas
  private senha: string;
  private saldo: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    this.senha = "secreta123";
    this.saldo = 1000;
  }

  verificarSenha(senha: string): boolean {
    return senha === this.senha;
  }

  sacar(senha: string, valor: number): string {
    if (senha !== this.senha) {
      return "Senha incorreta!";
    }

    if (valor > this.saldo) {
      return "Saldo insuficiente!";
    }

    this.saldo -= valor;
    return `Saque realizado! Saldo: ${this.saldo}`;
  }

  getSaldo(senha: string): number | string {
    if (senha === this.senha) {
      return this.saldo;
    }

    return "Senha incorreta!";
  }
}

const p1 = new Pessoa("João", 25);
console.log(p1.nome);
// console.log(p1.senha);
