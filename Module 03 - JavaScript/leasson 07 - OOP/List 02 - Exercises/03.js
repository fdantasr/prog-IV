/* Dada a seguinte função:
 function grow (){
 this.value = ( this.value *0 .5 )+ this.value ;
 }

Defina um objeto Produto com um atributo value começando em 50. Garanta que grow seja
invocado corretamente para este objeto, de maneira que cada invocação aumente value em 50%.
*/
function grow() {
    this.value = (this.value * 0.5) + this.value; //This referencia o valor/atributo de escopo dentro do objeto.
}

var Produto = {
    value: 50,
    adicionamaisum: grow
};

Produto.adicionamaisum(); //75
Produto.adicionamaisum(); // 75 + 50% = 112.5
console.log(Produto.value); //Retorna valor final de value após as alterações no atributo serem chamados através da função adicionamaisum();