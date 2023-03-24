import Barra from "./Barra.js";
import Bola from "./Bola.js";
class Pong {
  constructor( pong, informacoes ) {
    this.pong = pong;
    this.menu = pong.querySelector("#menu-pong");
    this.game = pong.querySelector( "#jogo-pong" );
    this.barraEsquerda = new Barra( this.game, informacoes.player[0], informacoes.nivel[0], 0 );
    this.barraDireita = new Barra(this.game, informacoes.player[1], informacoes.nivel[1], 1 ) ;
    this.bola = new Bola();
    this.#iniciar();
  }

  #iniciar() {
    //console.log(this);
    this.#configurarBotao( this.menu );
  }

  #configurarBotao( menu ) {
    let botaoIniciar = menu.querySelector( "#menu-iniciar" );
    console.log(2);
    botaoIniciar.addEventListener( "click", () => {
      this.#diminuirMenu( menu );
      this.#criaObjetos();
    });
  }

  #diminuirMenu(menu) {
    menu.className += " menu--diminuir";
  }

  #criaObjetos(jogo) {
    this.barraEsquerda.iniciar();
    this.barraDireita.iniciar();
  }
}



export default Pong;