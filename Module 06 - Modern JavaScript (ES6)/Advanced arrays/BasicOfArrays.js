const nomes = ['Eduardo', 'Maria', 'Joana']; //Tipo Literal
//const nomes2 = new Array('Eduardo', 'Maria', 'Joana'); *Tipo usando construtor*
nomes [2] = 'João';
delete nomes[2];
const novo = nomes; //Copia a referência
const novo2 = [...nomes]; //Copia o valor
const removido = novo.pop();
const removido2 = novo.shift(); //Remove o primeiro elemento deslocando os indices para a esquerda

console.log(nomes.length); //length é um atributo, não um método

/*-----------------------------------------*/

const pessoas = ['Eduardo', 'Maria', 'Joana'];
pessoas.push('João'); //Adiciona no final
pessoas.unshift('Wallace'); //Adiciona no começo

const novoArray = pessoas.slice(1, 3); //Cria um novo array com os elementos do indice 1 ao 3 (3 não incluso)

const nome = 'Wallace de Souza';
const nomes = nome.split(' '); //Cria um array com os elementos separados por espaço


pessoas.splice(2, 0, 'Luiz'); //Adiciona no indice 2 sem remover ninguém (0) e desloca os outros indices para a direita 