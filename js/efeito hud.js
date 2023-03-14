class Estrelas {
    constructor() {
        this.estrelas = document.querySelectorAll("[data-estrela]");
        this.iniciar()
    }

    iniciar() {
        this.altura();
        this.estrelas.forEach(elemento => this.movimento(elemento))
    }

    altura() {
        let numero = this.estrelas.length
        for (let i = 0; i < numero; i++) {
            this.estrelas[i].style.top = 10 * i + 5 + "%";
        }
    }

    tempo() {
        let numero = this.estrelas.length;
        let tempoAleatorio;

        tempoAleatorio = ((Math.random() * 4 + 1).toFixed(3));

        return +tempoAleatorio

    }
    movimento(estrela) {
        estrela.style.transition = "0.001s all"
        let tempo = this.tempo();
        setTimeout(() => {

            if (+estrela.style.left.replace("%", "") >= 100) {
                estrela.style.left = "-10%";
            }


            
        }, 200)
        setTimeout(() => {
            estrela.style.transition = " " + tempo + "s all cubic-bezier(1, 1, 0, 0)"
        }, 300  )
        setTimeout(() => {
            estrela.style.left = "110%";
        }, 500)
        console.log(tempo + 5 * 1000)
        setTimeout(() => { this.movimento(estrela) },(tempo* 1000) + 10)
    }
}

let movimentoEstrelas = new Estrelas();