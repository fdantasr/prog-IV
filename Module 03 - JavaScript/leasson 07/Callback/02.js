// Callback – Exemplo forEach
// Método para percorrer um array e passar seus valores como parâmetro a outra função

function logIfOdd(n) {
    if (n % 2 !== 0) {
    console.log(n);
    }
    }

    [1, 5, 2, 4, 6, 3].forEach(logIfOdd);
// 1
// 5
// 3