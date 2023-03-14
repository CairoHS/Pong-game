import Estrelas from './efeito hud.js'
import Barra from './barrinha.js';

let movimentoEstrelas = new Estrelas();
let barra1 = new Barra();
let barraMaquina = new Barra(); 

let comecar = document.querySelector("#comecar");

hud.addEventListener("click", () => {
    
    document.querySelector("#hud").className +=" diminuir"
    document.querySelector("#game").style.zIndex = "1";

});