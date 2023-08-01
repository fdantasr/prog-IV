const nummbers = [1, 2, 3]; 
const numbersDois = [4, 5, 6];
const numbersTres = nummbers.concat(numbersDois);
console.log(numbersTres);

const numbersQuatro = [...nummbers, ...numbersDois];
console.log(numbersQuatro);