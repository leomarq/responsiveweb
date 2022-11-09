// selecionar todos os elementos

let numeroSorteado = 0;
let imgDado = document.querySelector('#imgDado');
let btnSortear = document.querySelector('#btnSortear');

let sorteado = document.querySelector('#sorteado');

btnSortear.addEventListener('click',sortear);

function sortear () {
    imgDado.classList.add('animar');
    sorteado.classList.add('aparecer');
    setTimeout(function () {
    numeroSorteado = getRandomInt(1,6);
    imgDado.setAttribute('src','img/' + numeroSorteado + '.png');
    imgDado.classList.remove('animar');
    },1750);
}

function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}