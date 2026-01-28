class Usuario {
    id: number;
    nome: string;
    email: string;
    senha?: string | null;
    ativo: boolean;

    constructor(id: number, nome: string, email: string, ativo: boolean, senha: string | null = null) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.ativo = ativo;
        this.senha = senha;
    }
}

const usuario: Usuario = new Usuario(1, 'João', 'joao@empresa.com', true);
console.log(usuario);

// outra forma de criar a classe com seus atributos
// para tornar os atributos privados, podemos usar o private ou public readonly
// public readonly / readonly -> mesmo código
class Usuario2 {
    constructor(
        public readonly id: number,
        public readonly nome: string,
        public readonly email: string,
        public readonly ativo: boolean,
        public readonly senha: string | null = null,
    ) {}
}

const usuario2: Usuario2 = new Usuario2(1, 'João2', 'joao@empresa.com', false);
console.log(usuario2);
