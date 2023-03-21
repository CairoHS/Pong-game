
class Barra {
    constructor(telaDoJogo, lado = "", botoes = ["", ""]) {
        this.tela = telaDoJogo;
        this.right = lado;
        this.botoes = botoes;
        this.Y = window.innerHeight / 2
        this.X = (lado == "yes" ? (this.tela.clientWidth - (this.tela.clientWidth/100*3)) : (this.tela.clientWidth / 100) * 3);
        this.velocidade = (this.tela.clientHeight / 100);
        this.barra;
        this.comecar();
    }
    comecar() {
        this.colocarNaTela();
        if (this.right == "yes")
            this.controles();
    }
    colocarNaTela() {
        let barra = document.createElement("div");
        this.barra = barra;
        barra.style.transition = "0ms all"
        barra.className = "barra";
        barra.style.left = this.X + "px";
        this.tela.appendChild(barra);
        this.mudaLocalização();
    }

    controles() {

        const isMobile = navigator.userAgentData.mobile;


        let clickUp;
        let clickDown;

        if (isMobile != true) {

            this.botoes[0].addEventListener("mousedown", () => {

                clickUp = setInterval(() => {
                    if (this.Y - (this.barra.clientHeight / 2) > 0) {
                        this.Y -= this.velocidade;
                    }
                    this.mudaLocalização();
                    
                }, 20)

                clearInterval(clickDown);

            });
            this.botoes[0].addEventListener("mouseup", () => {
                clearInterval(clickUp);
            });


            this.botoes[1].addEventListener("mousedown", () => {

                clickDown = setInterval(() => {
                    if (this.Y + (this.barra.clientHeight / 2) < this.tela.clientHeight) {
                        this.Y += this.velocidade;
                    }
                    this.mudaLocalização();
                }, 20)
                clearInterval(clickUp);
            });
            this.botoes[1].addEventListener("mouseup", () => {

                clearInterval(clickDown);
            });
        }

        else {

            this.botoes[0].addEventListener("touchstart", () => {
                clickUp = setInterval(() => {
                    if (this.Y - (this.barra.clientHeight / 2) > 0) {
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
                    if (this.Y + (this.barra.clientHeight / 2) < this.tela.clientHeight) {
                        this.Y += this.velocidade;
                    }
                    this.mudaLocalização();
                }, 20)
            });
            this.botoes[1].addEventListener("touchend", () => {
                clearInterval(clickDown);
            });
        }


    }

    controleMaquina(botao) {

        botao[0].addEventListener("click", () => {

            if (this.Y - (this.barra.clientHeight / 2) > 0) {
                this.Y -= this.velocidade;
                this.mudaLocalização();
            }

        });

        botao[1].addEventListener("click", () => {

            if (this.Y + (this.barra.clientHeight / 2) < this.tela.clientHeight) {
                this.Y += this.velocidade;
                this.mudaLocalização();
            }

        });
    }

    mudaLocalização() {
        this.barra.style.top = this.Y + "px";
    }
}

export default Barra;

