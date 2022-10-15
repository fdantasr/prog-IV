/* Crie uma classe chamada forma que tenha um atributo de nome tipo e um método getTipo().
Defina outro objeto Triangulo que herde de forma através de protótipo. Defina os atributos
exclusivos de Triangulo: a, b e c, representando seus lados, e um método chamado getPerimetro()
que retorne seu perímetro. O construtor deve permitir que um novo objeto seja criado passando os
três valores para os lados. Instancie dois triângulos e teste cada um de seus métodos, tanto os da
classe base como os da derivada.*/

var Perimetro = function (lado1, lado2, lado3, res) {
    this.a = lado1;
    this.b = lado2;
    this.c = lado3;
    res = lado1 + lado2 + lado3;
    return(res);

}
class Forma {
    constructor(nome, tipo, metodo) {
        this.nome = nome;
        this.tipo = tipo;
    }
}
var figura = new Forma("Triângulo", )


var Triangulo = {
    a: 0,
    b: 0,
    c: 0,
    getPerimetro: Perimetro
}