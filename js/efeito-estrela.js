

class Estrelas {
    constructor() {
        this.estrelas = document.querySelectorAll("[data-estrela]");
        this.funcionar = 1;
        this.iniciar()
    }

    iniciar() {
        this.altura();
        this.estrelas.forEach(elemento => this.movimento(elemento));
    }

    altura() {
        let numero = this.estrelas.length
        let tamanho = 100 / numero
        for (let i = 0; i < numero; i++) {
            this.estrelas[i].style.top = (tamanho*i) + ( tamanho/2) + "%";
        }
    }

    movimento(estrela) {
        estrela.style.transition = "0s all"
        let tempo = this.tempo();
        setTimeout(() => {
            if (+estrela.style.left.replace("%", "") >= 100) {
                estrela.style.left = "-2%";
            }
        }, 10)
        setTimeout(() => {
            estrela.style.transition = " " + tempo + "s all cubic-bezier(1, 1, 0, 0)"
        }, 20)
        setTimeout(() => {
            estrela.style.left = "110%";
        }, 30)

        if(this.funcionar)
        setTimeout(() => {this.movimento(estrela) }, (tempo * 1000))
    }
    
    tempo() {
        let numero = this.estrelas.length;
        let tempoAleatorio;

        tempoAleatorio = ((Math.random() * 4 + 1).toFixed(3));
        return +tempoAleatorio
    }

    parar(){
        this.funcionar = 0
    }
}
export default Estrelas;