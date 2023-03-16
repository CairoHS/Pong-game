
class Barra {
    constructor(telaDoJogo, jogador = "", botoes = "") {
        this.tela = telaDoJogo;
        this.jogador = jogador;
        this.botoes = botoes;
        this.Y = window.innerHeight / 2
        this.X = (window.innerWidth / 100) * 3;
        this.velocidade = (this.tela.clientHeight / 100);
        this.barra;
        this.comecar();
    }
    comecar() {
        this.colocarNaTela();
        if (this.jogador == "yes")
            this.controles();
        else
            this.maquina();

    }
    colocarNaTela() {
        let barra = document.createElement("div");
        this.barra = barra;
        barra.style.transition = "10ms all"
        barra.className = "barra player";
        this.jogador == "yes" ? barra.style.left = window.innerWidth - this.X + "px" : barra.style.left = this.X + "px";
        this.tela.appendChild(barra);
        this.mudaLocalização();
    }

    controles() {
        let clickUp;
        let clickDown;
        this.botoes[0].addEventListener("mousedown", () => {

            clickUp = setInterval(() => {
                if(this.Y - (this.barra.clientHeight/2) > 0){
                    this.Y -= this.velocidade;
                }
                this.mudaLocalização();
            }, 20)

        });
        this.botoes[0].addEventListener("mouseup", () => {

            clearInterval(clickUp);
        });


        this.botoes[1].addEventListener("mousedown", () => {

            clickDown = setInterval(() => {
                if(this.Y + (this.barra.clientHeight/2) < this.tela.clientHeight){
                    this.Y += this.velocidade;
                }
                this.mudaLocalização();
            }, 20)

        });
        this.botoes[1].addEventListener("mouseup", () => {

            clearInterval(clickDown);
        });

        //para celular 

        this.botoes[0].addEventListener("touchstart", () => {

            clickUp = setInterval(() => {
                if(this.Y - (this.barra.clientHeight/2) > 0){
                    this.Y -= this.velocidade;
                }
                this.mudaLocalização();
            }, 20)

        });
        this.botoes[0].addEventListener("touchend", () => {

            clearInterval(clickUp);
        });


        this.botoes[1].addEventListener("touchstart", () => {

            clickDown = setInterval(() => {
                if(this.Y + (this.barra.clientHeight/2) < this.tela.clientHeight){
                    this.Y += this.velocidade;
                }
                this.mudaLocalização();
            }, 20)

        });
        this.botoes[1].addEventListener("touchend", () => {

            clearInterval(clickDown);
        });

    }

    mudaLocalização() {
        this.barra.style.top = this.Y + "px";
    }

    maquina() {

    }
}

export default Barra;

