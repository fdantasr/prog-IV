// Para instanciar um objeto em JS, usamos o operador new:
new SoftwareDeveloper();
// Na prática, SoftwareDeveloper ainda é uma função:
function SoftwareDeveloper() {
    this.favoriteLanguage = 'JavaScript';
}
// Podemos utilizar o mesmo construtor para criar mais objetos:
new SoftwareDeveloper();
function SoftwareDeveloper() {
    this.favoriteLanguage = 'JavaScript';
}
var engineer = new SoftwareDeveloper();
var programmer = new SoftwareDeveloper();
console.log(engineer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }
console.log(programmer);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript' }