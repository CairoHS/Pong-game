
class Jogo{
    constructor( pong ){
        this.pong = pong;
        this.#iniciar();
    }

    #iniciar(){
    this.#configurarBotao( this.pong );
    }

    #configurarBotao(jogo){
    let botaoIniciar = jogo.querySelector( "#iniciar" ),
    menu = jogo.querySelector("#menu-jogo");
    botaoIniciar.addEventListener( "click",() => this.#diminuirMenu(menu));
    }

    #diminuirMenu(menu){
        menu.className += " menu--diminuir";
    }
}



export default Jogo;