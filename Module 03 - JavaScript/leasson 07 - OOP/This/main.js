// Meio para referenciar membros do objeto.
// Atribuído no momento em que o objeto invoca o método onde é utilizado – depende do tipo de invocação.

function Cat(name) {
    this.name = name;
    this.sayName = function () {
    console.log(`Meow! My name is ${this.name}`);
    };
    }
    const bailey = new Cat('Bailey');
    bailey.sayName()
    // Meow! My name is Bailey