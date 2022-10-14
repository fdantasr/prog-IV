// apply( ) – semelhante a call(), mas agrupa parâmetros num array

function multiply(n1, n2) {
    return n1 * n2;
}
multiply.apply(window, [3, 4]);
// 12

// Pode ser usada para “pegar emprestado” métodos de outros objetos

const mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function () {
        console.log(`${this.title} is a classic novel`);
    }
};

const pride = {
    title: 'Pride and Prejudice'
};
mockingbird.describe.apply(pride);
        // 'Pride and Prejudice is a classic novel'