//ou .querySelector, ambos são formas de selecionar o elemento pelo ID
let ligar = document.getElementById('ligar');
let desligar = document.getElementById('desligar');
let lampada = document.getElementById('lampada');

ligar.addEventListener('click',ligarLampada);
desligar.addEventListener('click',desligarLampada);

lampada.addEventListener('dblclick',quebrarLampada);

function ligarLampada () {
    lampada.src = 'img/ligada.jpg';
}

function desligarLampada () {
    lampada.src = 'img/desligada.jpg';
}

function quebrarLampada () {
    lampada.src = 'img/quebrada.jpg';
}