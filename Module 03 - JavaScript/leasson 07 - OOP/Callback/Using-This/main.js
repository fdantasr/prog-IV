//  Quando funções são invocadas por si, this é definido globalmente

function invokeTwice(cb) {
    cb();
    cb();
}
const dog = {
    age: 5,
    growOneYear: function () {
        this.age += 1;
    }
};

dog.growOneYear();
dog.age;
// 6
invokeTwice(dog.growOneYear);
dog.age;
// 6