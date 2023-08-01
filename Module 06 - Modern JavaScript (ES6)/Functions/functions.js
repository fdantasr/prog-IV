//Funções no Js são encaradas como objetos de primeira classe, ou seja, podem ser passadas como parâmetros, retornadas, atribuídas a variáveis e etc.

//Função declarada/Function declaration
function minhaFuncao() { 
    console.log('Minha função');
}
//Function expression/Expressão de função
const minhaFuncao2 = function() {
    console.log('Minha função 2');
}
//Função nomeada/Named function
const minhaFuncao3 = function funcaoNomeada() {
    console.log('Minha função 3');
}
//Arrow function
const minhaFuncao4 = () => {
    console.log('Minha função 4');
}

/*-----------------------------------------*/

//Na Arrow function, se tiver apenas um parâmetro, não precisa de parênteses

const dobrar = (number) => {
   return number * number;
}

function criarPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
//armazenando a função em uma variável
const p0 = criarPessoa;
console.log(p0);
//armazenando o retorno da função em uma variável, o objeto
const p1 = criarPessoa('Luiz', 'Otávio');
console.log(p1);

