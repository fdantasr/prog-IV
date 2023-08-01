const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 30, 75, 93];
//função de callback sendo passada como argumento para o filter( metodo de array)

function callbackFilter(valor, indice, array) { 
  return valor > 10;
}

const numerosmaiores = numeros.filter(callbackFilter);
/*const numerosmaiores2 = numeros.filter(valor => valor > 10); Passando como um função anonima*/
console.log(numerosmaiores);

//Exemplo 2

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoascomnomegrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoascomnomegrande);