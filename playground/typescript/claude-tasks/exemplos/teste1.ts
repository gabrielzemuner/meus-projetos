// TypeScript com shorthand (mais limpo):
class Pessoa {
  #senha: string = "secreta123";
  #saldo: number = 1000;

  constructor(
    public nome: string,
    public idade: number,
  ) {}

  verificarSenha(senha: string): boolean {
    return senha === this.#senha;
  }

  sacar(senha: string, valor: number): string {
    if (senha !== this.#senha) return "Senha incorreta!";
    if (valor > this.#saldo) return "Saldo insuficiente!";

    this.#saldo -= valor;
    return `Saque realizado! Saldo: ${this.#saldo}`;
  }

  getSaldo(senha: string): number | string {
    return senha === this.#senha ? this.#saldo : "Senha incorreta!";
  }
}

const p1 = new Pessoa("João", 25);
console.log(p1);
