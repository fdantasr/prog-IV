var pegarNome  = function (name, sobrename) {
    this.nome = name;
    this.sobrenome = sobrename;
    console.log(this)
}
var pessoa = {
    nome: 'Pedro', //This vai ser referenciado neste escopo
    sobrenome: 'Aguiar',
    idade: 23,
    getNome: pegarNome
}
var carro = {
    nome: 'Gol', //This vai ser referenciado neste escopo
    marca: 'Vw',
    getNome: pegarNome 
}

pegarNome.call(pessoa, 'Felipe', 'Dantas');
pegarNome.apply([pessoa, 'Joao", "Pedro']); //Cria um objeto de parâmetros
var getNomeBind = pegarNome.bind(pessoa, 'Claudio', 'Antonio') //Bind cria uma função pra retorno
getNomeBind();