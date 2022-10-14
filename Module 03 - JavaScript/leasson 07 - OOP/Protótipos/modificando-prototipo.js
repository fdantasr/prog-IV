//Modificando protótipos
/* Adicionar métodos pelo protótipo permite que uma só “instância” da função seja compartilhada entre todos os objetos: economia de memória*/

function Person(first, last, age, gender, interests) {
    // property and method definitions
    this.first = first;
    this.last = last;
    //...
}
Person.prototype.farewell = function () {
    console.log(this.name.first + ' has left the building. Bye for now!');
};

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music'
    ,
    'skiing']);
person1.farewell()