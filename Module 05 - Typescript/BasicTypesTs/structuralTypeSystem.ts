type User = { username: string; password: string };
//Função como tipo de dado (Function Type)
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
}

const bdUser = {
  username: "joao",
  password: "123456",
}

const sentUser = {
  username: "joao",
  password: "123456"
}

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

//Não verifica o conteudo do objeto em si (até posso adicionar outros atributos), apenas um objeto que cumpra as propriedades do tipo User