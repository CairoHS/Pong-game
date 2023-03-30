import Pong from "./Pong.js";

const informacoes = {
  player: [
    0,
    1,
  ],
  nivel: [
    20,
    20,
  ],
};

const pegaJogo = document.querySelector('#pong');
const pong = new Pong(pegaJogo, informacoes);
