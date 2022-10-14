//Função de Alta Ordem
/*Podem ser tratadas como um valor a ser retornado.
 Funções que retornam função são chamadas funções de alta ordem
*/
function alertThenReturn() {
    alert('Message 1!');
    return function () {
        alert('Message 2!');
    };
}
const innerFunction = alertThenReturn();
//stores in variable - Retorna Messagem 1

innerFunction();
// alerts 'Message 2!'
alertThenReturn()();
    // alerts 'Message 1!' then returns inner func'