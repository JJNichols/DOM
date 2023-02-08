//Atividade
// 1 - Selecionassem um elemento

let title = document.getElementsByTagName('h1')[0].innerHTML;
console.log(title);

let list = document.getElementsByTagName('li');
let listText="";

for (let x = 0;x < list.length;x++){
    listText += list[x].innerHTML;
}

console.log(listText);

let listMonarchs = document.getElementsByClassName('tudor-monarchs');
let monarchsText="";

for(let i = 0;i<listMonarchs.length;i++){
    monarchsText += listMonarchs[i].innerHTML;
}

console.log(monarchsText);

const paragraph = document.getElementById('paragraph');
console.log(paragraph);

// 2 - Alterar o conteúdo de um elemento

let originalText = 'Henry VII - The Rise and Fall of Tudor Dynasty';

let x = document.querySelector('.tudor-monarchs ').textContent = originalText;

console.log(x);


// 3 - Removerem um elemento

let s = document.querySelector('.tudor-monarchs ');s.parentNode.removeChild(s);

s.remove();

console.log(s);

// 4 - Desafio! Criar um botão que mostre algo na tela

function Enter(){
    document.getElementById("a").onclick = alert("Good Morning!");

}

function Enter1(){
    document.getElementById("b").onclick = alert("Good afternoon!");

}

function Enter2(){
    document.getElementById("c").onclick = alert("Good Night");

}

function Enter3(){
    document.getElementById("d").onclick =alert("Beautiful");

}

function Enter4(){
    document.getElementById("e").onclick = alert("Mad!");

}

function Enter5(){
    document.getElementById("f").onclick = alert("Brazil is wonderful!");
}
