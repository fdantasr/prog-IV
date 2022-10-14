const myName = 'Andrew';
function introduceMyself() {
    const you = 'student';
    function introduce() {
        console.log(`Hello, ${you}, I'm ${myName}!`);
    }
    return introduce(); //Introduce pegou uma informação de fora do escopo dele
}
introduceMyself();
// 'Hello, student, I'm Andrew!'