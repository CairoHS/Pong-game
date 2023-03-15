
class Barra {
    constructor(telaDoJogo, jogador = "", botoes = "") {
        this.tela = telaDoJogo;
        this.jogador = jogador;
        this.botoes = botoes;
        this.barra;
        this.comecar();
    }
    comecar() {
        this.colocarNaTela();
        if (this.jogador == "yes")
            this.controles();

    }
    colocarNaTela() {
        let barra = document.createElement("div");
        barra.className = "barra player";
        this.jogador == "yes" ? barra.style.right = "3%" : barra.style.left = "3%";
        barra.style.top = "50%"
        this.barra = barra;
        this.tela.appendChild(barra);
    }

    controles() {
             this.botoes[0].addEventListener("click", () => {
              this.barra.style.top = (+this.barra.style.top.replace("%", "") + -5 + "%");
         })
         this.botoes[1].addEventListener("click", () => {
            this.barra.style.top = (+this.barra.style.top.replace("%", "") + 5 + "%");
       })
    }


}

export default Barra;

