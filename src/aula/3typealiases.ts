type Food = string;
const refeicao: Food = 'some';

type Force = {
    running: Boolean,
    swimming: Boolean,
}

type Pessoa = {
    name: string,
    age: number,
    force: Force,
}

let objP: Pessoa = {
    name: 'Luiz',
    age: 43,
    force: {
        running: true,
        swimming: true,
    }
};

