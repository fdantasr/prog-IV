/*Crie um array contendo trˆes valores. Crie um segundo array de três posi¸c˜oes e adicione em cada
posi¸c˜ao o primeiro array criado. Mostre no console, para cada array interno, a posi¸c˜ao correspondente do array externo.*/

var v1 = new Array(); //INTERNO
v1[0] = 1;
v1[1] = 2;
v1[2] = 3;

var v2 = new Array(); //INTERNO
v2[0] = 4;
v2[1] = 5;
v2[2] = 6;

var v3 = new Array(); //INTERNO
v3[0] = 7;
v3[1] = 8;
v3[2] = 9;

let v4 = [v1, v2, v3]; //EXTERNO
v3.push(10); //Adiciona outro valor/posição ao vetor v3[3] = 10
//const removido = v3.pop(); - Remove um índice e o elemento do final
//const removido = v3.shift(); - Remove um elemento do final
//v3.unshift(70); - Adiciona outro valor no início do array trocando os índices
//delete v3[1] - Deixa o indice com o valor vazio
//console.log(v3.slice(0,) mostra os elementos de um ponto a outro do array

for (let i = 0; i < v4.length; i++) {
    console.log(v4); //Aarray de Arrays contendo os 3 vetores anteriores
    console.log(v4[i]);

}
