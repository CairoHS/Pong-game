class Estrelas {
    constructor() {
        this.estrelas = document.querySelectorAll("[data-estrela]");
        this.iniciar()
    }
    
    iniciar(){
        let numero = this.estrelas.length
        for( let i = 0 ; i < numero ; i++){
            this.estrelas[i].style.top =  10*i + 5 + "%" ;
        }

    }
}

    let movimentoEstrelas = new Estrelas();