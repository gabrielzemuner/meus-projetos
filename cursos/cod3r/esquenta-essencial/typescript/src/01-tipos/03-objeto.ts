// Exemplo 3 - esse mesmo exemplo poderia ter as tipagens de forma inferida
const pessoa: { nome: string; idade: number } = {
    nome: 'Maria',
    idade: 30,
};

pessoa.idade = 31

console.log(pessoa.nome);
console.log(pessoa.idade);
