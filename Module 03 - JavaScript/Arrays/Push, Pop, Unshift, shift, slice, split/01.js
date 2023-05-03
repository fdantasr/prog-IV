const names = ['Eduardo', 'Maria', 'Joana', 'Pedro', 'Djalma'];
const nameReference = names;

nameReference.push('João'); // Altera o array names também, adicionando 'João' ao final do array
nameReference.pop(); // Altera o array names também, removendo o último elemento do array
nameReference.shift(); // Altera o array names também, removendo o primeiro elemento do array
nameReference.unshift('Felipe'); // Altera o array names também, adicionando 'Felipe' ao início do array

const nameCopy = [...names]; // Cria uma cópia do array names usando rest, sem alterar o array original
const nameCopy2 = names.slice(1,3); // Cria uma cópia do array names, sem alterar o array original
const nameCopy3 = names.slice(1, -1); //Usando numeros negativos, ele vai pegar os elementos do array de trás para frente

console.log("Array 1: ", nameReference);
console.log("Array 2: ", nameCopy);
console.log("Array 3: ", nameCopy2);
console.log("Array 4: ", nameCopy3);

const clietName = 'Luiz Otávio Miranda';
const clietNameArray = clietName.split(' '); // Transforma a string em um array, separando os elementos pelo espaço
const clientNameArray2 = clietName.split(','); // Transforma a string em um array, separando os elementos pela vírgula
console.log("Array 5: ", clietNameArray);
console.log("Array 6: ", clientNameArray2);

//Para converter um array de string em uma string, usamos o join
const clientNameString = clietNameArray.join(' '); // Transforma o array em uma string, juntando os elementos com espaço