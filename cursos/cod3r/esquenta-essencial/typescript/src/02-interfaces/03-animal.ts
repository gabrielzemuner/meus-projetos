interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

// herança => oo
interface Pet extends Animal {
    dono: string;
}

let cachorro: Pet = {
    nome: 'Rex',
    tipo: 'terrestre',
    domestico: true,
    dono: 'Victor',
};

console.log(cachorro);
