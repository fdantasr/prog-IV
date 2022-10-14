/*Crie trˆes vari´aveis a, b e c adicionando valores diretamente. Em seguida, some a e b, divida este
valor por c e substitua o valor de c pelo resto de c e b. Imprima os trˆes números no console.*/

var a  = 2;
var b = 4;
var c = 6;

var soma = a+b;
var div = soma/c;
c = c%b; //Módulo

console.log("Soma: ", soma);
console.log("Divisão: ", div);
console.log("Resto de C e B: ", c);
