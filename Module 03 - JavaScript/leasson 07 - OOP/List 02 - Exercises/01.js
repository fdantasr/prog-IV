/* 1. Defina uma função chamada mensagem que exiba a mensagem ’Olá’ e em seguida retorne uma
segunda função que exiba na tela a mensagem ’Tudo bem?’. Garanta que uma variável a receba
a função e mostre a mensagem ’Tudo bem?’ a partir de a. Realize uma invocação da função
mensagem de maneira que ela mostre as duas mensagens que estão dentro dela.*/

function mensagem() {
    alert('Hello!');
    return function () {
        alert('Are you ok?');
    };
}
const a = mensagem(); //Printa alert
a(); //Executa retorno
mensagem()(); //EXecuta o alert e depois o retorno.


