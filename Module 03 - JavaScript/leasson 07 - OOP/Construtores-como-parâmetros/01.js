// Assim como funções, construtores podem receber parâmetros:
function SoftwareDeveloper(name) {
    this.favoriteLanguage = 'JavaScript';
    this.name = name;
    }
// A partir de agora, podemos criar objetos com diferentes atributos:
var instructor = new SoftwareDeveloper('Andrew');
var teacher = new SoftwareDeveloper('Richard');
console.log(instructor);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Andrew' }
console.log(teacher);
// SoftwareDeveloper { favoriteLanguage: 'JavaScript', name: 'Richard' }