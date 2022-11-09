

//DOM - DOCUMENT OBJECT MODEL

/*  <h1> AULA 01 - DOM </h1>*/
//let titulo = document.querySelector("h1");

let titulo = document.querySelector("#titulo");


let subTitulo = document.querySelector("#subTitulo");
/*MUDEI O TEXTO DO H1 */
//titulo.textContent= "DOM";


subTitulo.textContent = "subtitulo ";
console.log(titulo);



let tela = document.querySelector("main");

let btnDark = document.querySelector("#btnDark");

let btnLigth = document.querySelector("#btnLigth");


btnDark.addEventListener('click',modoDark);
btnLigth.addEventListener('click',modoLigth);


function modoDark(){
    tela.classList.add("escuro");
   tela.classList.remove("claro");
    
}

function modoLigth() {
   tela.classList.add("claro");
   tela.classList.remove("escuro");
}