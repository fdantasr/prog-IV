// Subclasses – herança de protótipo

/*Object.create()
Espera um objeto como argumento e retorna um novo objeto com a
propriedade __proto__ definida pelo argumento */


const mammal = {
vertebrate: true,
earBones: 3
};
const rabbit = Object.create(mammal);
console.log(rabbit);
// {}
console.log(rabbit.__proto__ === mammal);
// true
console.log(rabbit.vertebrate);
// true
console.log(rabbit.earBones);
// 3