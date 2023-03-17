import Estrelas from './efeito-estrela.js'
import Barra from './Barra.js';
import Bola from './bola.js';
import Maquina from "./Maquina.js"


let comecar = document.querySelector("#btComecar");
let jogo = document.querySelector("#game");
let botoesGame = jogo.querySelectorAll("[data-gameBotao]");
let movimentoEstrelas = new Estrelas();

const isMobile = navigator.userAgentData.mobile;
if(isMobile == true){
    document.querySelector(".menu__titulo").style.color = "pink";
}
else{
    document.querySelector(".menu__titulo").style.color = "blue";
}



comecar.addEventListener("click", () => {
    document.querySelector("#hud").className += " diminuir"
    document.querySelector("#game").style.zIndex = "1";
    movimentoEstrelas.parar();
    let barraR = new Barra(jogo, "yes", botoesGame);
    let barraL = new Barra(jogo, "no");
    let bola = new Bola(jogo,barraL,barraR);
    let maquina = new Maquina(jogo,bola,barraL,1);
   // let barra2 = new Barra(jogo, "no");

});