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

let v4  = [v1, v2, v3]; //EXTERNO

for (let i = 0; i < v4.length; i++) {
    console.log(v4[i]);
    
}
