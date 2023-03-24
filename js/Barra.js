class Barra {
    constructor( game, player, nivel, lado ){
        this.game = game;
        this.barra;
        this.x;
        this.y;
        this.lado = lado;
        this.largura;
        this.player = player;
        this.nivel = nivel;
    }

    iniciar() {
        this.#criaElemento(this.barra,this.game);
    }

    #criaElemento(barra,jogo){
       let div = document.createElement("div");
        div.className = "jogo__barra";
        barra = div;
        jogo.appendChild(div);
    } 
}


export default Barra;