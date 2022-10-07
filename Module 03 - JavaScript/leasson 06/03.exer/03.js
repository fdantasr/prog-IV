/*Crie um array contendo os valores Pedra, Papel e Tesoura. Pe¸ca ao usu´ario via prompt para
informar o item escolhido. Mostre via console o resultado do jogo. Exemplo: Papel venceu
Pedra.*/

var jqp = ["pedra", "papel", "tesoura"];

var cpu = jqp[Math.floor(Math.random() * 3)];

var user = window.prompt("Informe pedra, papel ou tesoura: ");
window.alert(cpu);

//Caso usuario informe pedra
if(user == "pedra" && cpu == "tesoura"){
    console.log("Você ganhou!");
}
else if(user == "pedra" && cpu == "papel"){
    console.log("Você perdeu!");
}
else if(user == "pedra" && cpu == "pedra"){
    console.log("Empate!");
}

//Caso usuario informe papel
if(user == "papel" && cpu == "tesoura"){
    console.log("Você perdeu!");
}
else if(user == "papel" && cpu == "papel"){
    console.log("Empate!");
}
else if(user == "papel" && cpu == "pedra"){
    console.log("Você ganhou!");
}

//Caso usuario informe tesoura
if(user == "tesoura" && cpu == "tesoura"){
    console.log("Empate!");
}
else if(user == "tesoura" && cpu == "papel"){
    console.log("Você ganhou!");
}
else if(user == "tesoura" && cpu == "pedra"){
    console.log("Você perdeu!");
}


