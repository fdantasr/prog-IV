enum cores {
  vermelho,
  verde,
  azul

};

//let cor:cores = cores.vermelho;
console.log(cores[0]);

enum cores2 {

  VERMELHO = "#FF0000",
  VERDE = "#00FF00",
  AZUL = "#0000FF",

  //o valor de branco será o valor do ultimo +1
  branco = 1,
  piguelo

};

// ele une os valores dos enums

enum cores2 {
  beringela = 10,
  verdosvaldo = 100,
  blue = 1000,
  Roxao = 'Roxo',
  pretao = 11,
  //o valor de branco será o valor do ultimo +1
  brancao

};

//se eu tentar acessar um indice que não existe ele retorna undefined


function escolhaCor(cor: cores2): void {
  console.log(cores2[cor]);
}

escolhaCor(cores2.branco);