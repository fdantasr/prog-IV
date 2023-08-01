//O Reduce é um método que executa uma função para cada elemento retornando um único valor de retorno

//Exemplo 1

const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((accumulator, value, indice, array) => accumulator + value, 0);
console.log(sum); // 21

//Exemplo 2 - Retornando um objeto

const people = [
    { name: 'Luiz', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Eduardo', age: 55 },
    { name: 'Letícia', age: 19 },
    { name: 'Rosana', age: 32 },
    { name: 'Wallace', age: 47 },
];  

const older = people.reduce((accumulator, value) => {

    if (accumulator.age > value.age) return accumulator;
    return value;

}
);
console.log(older); // { name: 'Luiz', age: 62 }
//A função reduce recebe 4 parâmetros, sendo eles:
//Acumulador
//Valor
//Indice
//Array
//O acumulador é o valor retornado (primeiro elemento se eu n definir nada) na função anterior, o valor é o valor atual que está sendo iterado, o indice é o indice atual e o array é o array original. Quem for mais velho será retornado (acumulador) e assim sucessivamente até o final do array.