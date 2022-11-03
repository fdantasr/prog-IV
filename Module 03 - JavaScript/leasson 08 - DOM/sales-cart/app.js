
//Como se fosse uma Main que carrega  a DOM

window.onload = function () { 
    var select = document.getElementById("compra");
    newvalor = 0;

    select.addEventListener('change', function () {
        opcaoTexto = select.options[select.selectedIndex].text;
        opcaoValor = select.options[select.selectedIndex].value;
        valuefloat = parseFloat(opcaoValor)
    })

//Pega os eventos do Botão
    var botao = document.getElementById('button');

//Cria elementos na lista
    botao.onclick = function adicionar() {

        var newel = document.createElement('li');
        var newtext = document.createTextNode(opcaoTexto);
        newel.appendChild(newtext);

        var position = document.getElementsByTagName('ul')[0];
        position.appendChild(newel);

//Coloca o resultado na div 
        var total = document.getElementById('result');
        var novotot = total.firstChild.nodeValue;

        newvalor = newvalor + valuefloat;

        console.log(newvalor);


        if (novotot == '0.00') {
            novotot = novotot.replace('0.00', newvalor);
            total.firstChild.nodeValue = novotot;
        } else {
            novotot = novotot.replace(novotot, newvalor.toFixed(2));
            total.firstChild.nodeValue = novotot;
        }
    }
}