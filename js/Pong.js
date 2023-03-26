import Barra from "./Barra.js";
import Bola from "./Bola.js";
class Pong {
  constructor( pong, informacoes ) {
    this.mobile = 'no';
    this.pong = pong;
    this.menu = pong.querySelector("#menu-pong");
    this.game = pong.querySelector( "#jogo-pong" );
    this.informacoes = informacoes;
    this.barraEsquerda;
    this.barraDireita;
    this.bola = new Bola();
    this.#iniciar();
  }

  #iniciar() {
    this.#verificaMobile();
    this.#criaBarra();
    this.#configurarBotao( this.menu );
  }

  #configurarBotao( menu ) {
    let botaoIniciar = menu.querySelector( "#menu-iniciar" );
    console.log(2);
    botaoIniciar.addEventListener( "click", () => {
      this.#diminuirMenu( menu );
      this.#criaLinha();
      this.#criaObjetos();
    });
  }

  #diminuirMenu(menu) {
    menu.className += " menu--diminuir";
  }

  #criaObjetos() {
    this.barraEsquerda.iniciar();
    this.barraDireita.iniciar();
  }

  #criaLinha() {
    let linha = document.createElement( "div" );
    linha.className = "game__linha";
    this.game.appendChild(linha);
  }

  #criaBarra() {
    this.barraEsquerda = new Barra( this.game, this.informacoes.player[0], this.informacoes.nivel[0], 0 ,this.mobile);
    this.barraDireita = new Barra(this.game, this.informacoes.player[1], this.informacoes.nivel[1], 1 , this.mobile );
  }

  #verificaMobile() {
    if (navigator.userAgentData != undefined && navigator.userAgentData.mobile){
      this.mobile = "yes";
    }
  }
}



export default Pong;