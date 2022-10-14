// • A adição é percebida por objetos já instanciados, mas a sobreposição não

function Hamster() {
    this.hasFur = true;
}
let waffle = new Hamster();
let pancake = new Hamster();
Hamster.prototype.eat = function () {
    console.log('Chomp chomp chomp!');
};
waffle.eat();
// 'Chomp chomp chomp!'
pancake.eat();
// 'Chomp chomp chomp!'

Hamster.prototype = {
    isHungry: false,
    color: 'brown'
};
console.log(waffle.color);
// undefined
waffle.eat();
// 'Chomp chomp chomp!'
console.log(pancake.isHungry);
// undefined
const muffin = new Hamster();
muffin.eat();
// TypeError: muffin.eat is not a function
console.log(muffin.isHungry);
// false
console.log(muffin.color);
        // 'brown