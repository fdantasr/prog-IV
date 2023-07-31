const pessoas = [
  { id: 3, nome: 'João', idade: 18 },
  { id: 2, nome: 'Maria', idade: 23 },
  { id: 1, nome: 'José', idade: 30 },
];


/*const novasPessoas = {};
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas[id] = { ...pessoa };
}*/

const  novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}
console.log(novasPessoas);
console.log(novasPessoas.get(2));