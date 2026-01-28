// JavaScript moderno (campos privados com #):
class Pessoa {
  // Campos privados
  #senha;
  #saldo;

  // Campos públicos
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.#senha = "secreta123";
    this.#saldo = 1000;
  }

  verificarSenha(senha) {
    return senha === this.#senha;
  }

  sacar(senha, valor) {
    if (senha !== this.#senha) {
      return "Senha incorreta!";
    }

    if (valor > this.#saldo) {
      return "Saldo insuficiente";
    }

    this.#saldo -= valor;
    return `Saque realizado! Saldo: ${this.#saldo}`;
  }

  getSaldo(senha) {
    if (senha === this.#senha) {
      return this.#saldo;
    }

    return "Senha incorreta!";

    /* Outra forma de escrever o mesmo código */
    // if (senha !== this.#senha) {
    //   return 'Senha incorreta!';
    // }

    // return this.#saldo;
  }
}

const p1 = new Pessoa("João", 25);
console.log(p1.nome);
// console.log(p1.#senha)
console.log(p1.getSaldo("secreta123"));
