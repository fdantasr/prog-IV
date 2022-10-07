/*Crie uma função countdown que receba como parâmetro um inteiro n e mostre no browser (via
alert) a contagem regressiva de n até 0.*/

//var n = 3;
var n = window.prompt("Informe um número para decrementar: ")
function countDown(n) {
    for (let i = n; i >= 0; i--) {
        window.alert(i);
    }
}
countDown(n);