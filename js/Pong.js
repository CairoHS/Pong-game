import Barra from './Barra.js';
import Bola from './Bola.js';

class Pong {
  constructor(pong, informacoes) {
    this.mobile = 'no';
    this.pong = pong;
    this.menu = pong.querySelector('#menu-pong');
    this.game = pong.querySelector('#jogo-pong');
    this.informacoes = informacoes;
    this.barraEsquerda = '';
    this.barraDireita = '';
    this.bola = '';
    this.#iniciar();
  }

  #iniciar() {
    this.#verificaMobile();
    this.#criaBarra();
    this.#configurarBotao();
  }

  #configurarBotao() {
    const botaoIniciar = this.menu.querySelector('#menu-iniciar');
    botaoIniciar.addEventListener('click', () => {
      this.#diminuirMenu(this.menu);
      this.#criaLinha();
      this.#criaObjetos();
    });
  }

  #diminuirMenu() {
    this.menu.className += ' menu--diminuir';
  }

  #criaObjetos() {
    this.barraEsquerda.iniciar();
    this.barraDireita.iniciar();
    this.bola.iniciar();
  }

  #criaLinha() {
    const linha = document.createElement('div');
    linha.className = 'game__linha';
    this.game.appendChild(linha);
  }

  #criaBarra() {
    this.barraEsquerda = new Barra(
      this.game,
      this.informacoes.player[0],
      this.informacoes.nivel[0],
      0,
      this.mobile,
    );

    this.barraDireita = new Barra(
      this.game,
      this.informacoes.player[1],
      this.informacoes.nivel[1],
      1,
      this.mobile,
    );

    this.bola = new Bola(
      this.game,
      this.barraEsquerda,
      this.barraDireita,
    );
  }

  #verificaMobile() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
      this.mobile = 'yes';
    }
  }
}

export default Pong;
