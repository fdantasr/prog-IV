/* Map - Cria um novo array com o resultado da chamada de uma função para cada elemento do array,
 alterando, ao contrário do filter que só filtra, o array original.*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

//Exemplo 2

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome); //Cria um novo array com os nomes
const idades = pessoas.map(obj => ({ idade: obj.idade })); //Cria um novo array com as idades

const comIds = pessoas.map(function (obj, indice) {
  //Cria um novo array com os objetos e adiciona um novo atributo, ao inves de sobrescrever o original ,já que objetos são passados por referência
  const newObj = { ...obj };
  newObj.id = indice + 1; //Adiciona um novo atributo ao objeto
  return newObj;
});

console.log(comIds);