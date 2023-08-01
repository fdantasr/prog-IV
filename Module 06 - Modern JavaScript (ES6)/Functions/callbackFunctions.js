const saudar = (nome, responder) => {

  const horaAtual = new Date().getHours();

  /*const responder = (saudacao) => {
  //  console.log(saudacao, nome);
  //};*/

  if (horaAtual <= 12) return responder('Bom dia', nome);
  if (horaAtual <= 18) return responder('Boa tarde', nome);
  return responder('Boa noite', nome);

}

const responderCallback = (saudacao, nome) => {
  console.log(saudacao, nome);
};
saudar('João', responderCallback);
/*saudar ('Joao', (saudacao, nome) => console.log(saudacao, nome));*/

//callback functions sao funções que são passadas como argumentos para outras funções e executadas quando um evento acontece ou quando uma parte do código é alcançada.