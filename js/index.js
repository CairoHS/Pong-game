import Pong from "./Pong.js";

const informacoes = {
  player: [
    1,
    0,
  ],
  nivel: [
    1,
    1,
  ],
};

const pegaJogo = document.querySelector('#pong');
const pong = new Pong(pegaJogo, informacoes);
