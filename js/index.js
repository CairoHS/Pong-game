import Estrelas from './efeito-estrela.js'
import Barra from './Barra.js';


let comecar = document.querySelector("#btComecar");
let jogo = document.querySelector("#game");
let botoesGame = jogo.querySelectorAll("[data-gameBotao]");
let movimentoEstrelas = new Estrelas();



comecar.addEventListener("click", () => {
    document.querySelector("#hud").className += " diminuir"
    document.querySelector("#game").style.zIndex = "1";
    movimentoEstrelas.parar();
    let barra1 = new Barra(jogo, "yes", botoesGame);
   // let barra2 = new Barra(jogo, "no");

});