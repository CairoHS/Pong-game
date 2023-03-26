class Barra {
    constructor( game, player, nivel, lado, dispositivoMovel ){
        this.game = game;
        this.barra;
        this.x;
        this.y;
        this.lado = lado;
        this.largura;
        this.dispositivoMovel = dispositivoMovel;
        this.player = player;
        this.nivel = nivel;
    }

    iniciar() {
        this.#criaElemento( this.game );
        this.#colocaPosicao( this.game, this.lado);
        if(this.dispositivoMovel === "yes"){
            this.barra.style.background = "pink";
        }
    }

    #criaElemento(jogo) {
       let div = document.createElement("div");
        div.className = 'game__barra';
        this.barra = div;
        jogo.appendChild(div);
    }

    #colocaPosicao( game, lado) {
        let distanciaDaParede = game.clientWidth / 100 * 3;
        this.y = game.clientHeight / 2;
        this.x = lado ? distanciaDaParede : game.clientWidth - distanciaDaParede;
        this.barra.style.left = this.x + "px";
        this.#atualizaPosicao();
    }

    #atualizaPosicao() {
        this.barra.style.top = this.y + "px";
    }
}


export default Barra;