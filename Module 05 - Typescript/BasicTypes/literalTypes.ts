let x = 10; //O tipo inferido é number
x = 0b1010;
// x = '10'; //Erro, pois o tipo inferido é number
const y = 10; //Tipo literal, o valor só pode ser 10, é um subtipo de number

let a = 100 as const; //Tipo literal, o valor só pode ser 100, é um subtipo de number

// export default para não dar erro de "redeclare" 
export default 1;

const person = {
    name: 'João' as const,
    age: 18
};
//pessoa.name = 'Maria'; Erro, pois o tipo inferido é "João"
