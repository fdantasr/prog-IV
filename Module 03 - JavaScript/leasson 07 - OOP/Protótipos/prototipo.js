//• Protótipos
//• Mecanismo pelo qual objetos JS herdam recursos uns dos outros
function Person(first, last, age, gender, interests) {
    // property and method definitions
    this.first = first;
    this.last = last;
    //...
}
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music'
    ,
    'skiing']);
person1.valueOf() // método herdado de classe Object