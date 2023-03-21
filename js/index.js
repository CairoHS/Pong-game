import Estrelas from './efeito-estrela.js'
import Barra from './Barra.js';
import Bola from './bola.js';
import Maquina from "./Maquina.js"
import Placar from "./Placar.js"


let comecar = document.querySelector("#btComecar");
let jogo = document.querySelector("#game");
let botoesGame = jogo.querySelectorAll("[data-gameBotao]");
let botoesGame2 = jogo.querySelectorAll("[data-gameBotao2]");
let movimentoEstrelas = new Estrelas();

comecar.addEventListener("click", () => {
    document.querySelector("#hud").className += " diminuir"
    document.querySelector("#game").style.zIndex = "1";
    movimentoEstrelas.parar();
    let barraR = new Barra(jogo, "yes", botoesGame);
    let barraL = new Barra(jogo, "no" , botoesGame2);
    let placar = new Placar(jogo);
    let bola = new Bola(jogo,barraR,barraL,placar);
    let maquina = new Maquina(jogo,bola,barraL,10);
    let maquina2 = new Maquina(jogo,bola,barraR,10);

});