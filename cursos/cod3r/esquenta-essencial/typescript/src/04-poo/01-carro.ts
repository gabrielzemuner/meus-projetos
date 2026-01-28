export default abstract class Carro {
    constructor(
        private readonly velocidadeMaxima: number = 220,
        private readonly aceleracao = 5,
        private readonly frenagem = 5,
        protected velocidadeAtual: number = 0,
    ) {}

    // public: acessível por qualquer código que tenha a instância.
    // private: acessível somente dentro da própria classe
    // protected: acessível dentro da classe e dentro das subclasses (herança).

    // exemplos public -> nome, idade
    // exemplos protected -> senha do banco que o filho também tem acesso

    // get antes da função (método) possibilita acessar o método como obj.velocidade ao invés de obj.velocidade()
    get velocidade(): number {
        return this.velocidadeAtual;
    }

    acelerar(): number {
        const novaVelocidade = this.velocidadeAtual + this.aceleracao;
        this.velocidadeAtual = novaVelocidade <= this.velocidadeMaxima ? novaVelocidade : this.velocidadeMaxima;
        return this.velocidadeAtual;
    }

    frear(): number {
        const novaVelocidade = this.velocidadeAtual - this.frenagem;
        this.velocidadeAtual = novaVelocidade >= 0 ? novaVelocidade : 0;
        return this.velocidadeAtual;
    }
}

// frase pra testar se existe herança
// ____ é um(a) ____
// ex: Civic é um(a) Carro
// Civic -> + específico
// Carro -> + genérico
class Civic extends Carro {
    constructor() {
        super(230, 10, 5);
    }
}

const meuCarro = new Civic();
meuCarro.acelerar();
meuCarro.acelerar();
meuCarro.acelerar();
console.log('Civic:', meuCarro.velocidade);

interface Esportivo {
    ligarTurbo(): void;
    desligarTurbo(): void;
}

class Ferrari extends Carro implements Esportivo {
    private turbo = false;

    constructor() {
        super(350, 20, 15);
    }

    ligarTurbo(): void {
        this.turbo = true;
    }

    desligarTurbo(): void {
        this.turbo = false;
    }

    acelerar(): number {
        if (this.turbo) {
            super.acelerar();
            return super.acelerar(); // acelera 2x se o turbo estiver ligado
        } else {
            return super.acelerar();
        }
    }
}

const meuCarroEsportivo = new Ferrari();
meuCarroEsportivo.ligarTurbo()
meuCarroEsportivo.acelerar();
meuCarroEsportivo.acelerar();
meuCarroEsportivo.acelerar();
console.log('Ferrari:', meuCarroEsportivo.velocidade);
meuCarroEsportivo.frear();
meuCarroEsportivo.frear();
console.log('Ferrari:', meuCarroEsportivo.velocidade);
