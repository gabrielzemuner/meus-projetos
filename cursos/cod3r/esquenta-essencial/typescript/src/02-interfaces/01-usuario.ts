interface Usuario {
    id: number | string;
    nome: string;
    email: string;
    senha?: string;
    ativo: boolean;
}

let usuario: Usuario = {
    id: 1234,
    nome: 'Fulano de Tal',
    email: 'fulano@empresa.com.br',
    ativo: true,
};

console.log(usuario);
