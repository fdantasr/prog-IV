//Segundo exemplo


function Animal(name) {
    this.name = name;
}
Animal.prototype.walk = function () {
    console.log(`${this.name} walks!`);
};
function Cat(name) {
    Animal.call(this, name);
    this.lives = 9;
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
    console.log('Meow!');
};
const billy = new Cat('Billy');
billy.meow();
billy.walk();
billy.name;