class Barra {
    constructor( game, player, nivel, lado, dispositivoMovel ){
        this.game = game;
        this.barra;
        this.x;
        this.y;
        this.lado = lado;
        this.dispositivoMovel = dispositivoMovel;
        this.player = player;
        this.nivel = nivel;
    }

    iniciar() {
        this.#criaElemento( this.game );
        this.#colocaPosicao( this.game, this.lado);
        this.#criaBotoes(this.dispositivoMovel,this.lado);
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
 
    #criaBotoes(dispositivoMovel) { 
        let botao1 = document.createElement("div"),
        botao2 = document.createElement("div");

        botao1.className = `game__botao--cima game__botao--${this.lado ? "direita" : "esqueda"}` ;
        botao2.className = `game__botao--baixo game__botao--${this.lado ? "direita" : "esqueda"}`;

        this.game.appendChild(botao1);
        this.game.appendChild(botao2);

        if(this.dispositivoMovel === "yes"){
            this.#botoesmobile(botao1,botao2);
        }
        else{
            this.#botoesDesktop();
        }
        
    }

    #botoesmobile(botao1,botao2) { 
        let intervalos;
        botao1.addEventListener( "touchstart" , () => {
           invervalos = setInterval( () => {
            this.x += 20;

            },50,{passive: true})
        });
        botao1.addEventListener( "touchend" , () => {
          clearInterval(intervalos);
        },50,{passive: true})
        
    }

    #botoesDesktop() {

    }
}


export default Barra;