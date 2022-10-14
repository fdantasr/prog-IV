/* Defina uma função que retorne "Seja bem vindo" se o parâmetro for igual a 1 ou "Tente novamente"
se parâmetro for igual a 0. Defina uma segunda função que receba como parâmetro a primeira função, seguida do parâmetro (0 ou 1), seguido de um nome. Esta função deve invocar a primeira e
concatenar a saída com o nome passado no parâmetro. */


let name = window.prompt("Digite seu primeiro nome")
let number = window.prompt("Digite 1 ou 0");
function mensagem(number) {
    if (number == 1) {
        return ("Seja bem vindo ")
    }
    else if (number == 0) {
        return ("Tente novamente ")
    }
    else {
        return ("Digite um valor válido")
    }
}

function concatena(f, numero, nome) {
    return f(numero) + nome;
}
alert(concatena(mensagem, number, name));

