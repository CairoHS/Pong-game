
class Maquina {
    constructor(jogo, bola, barra, nivel) {
        this.tela = jogo;
        this.bola = bola;
        this.barra = barra;
        this.local;
        this.nivel = nivel;
        this.iniciar();
    }

    iniciar() {
        this.randomMovimento(this.barra.rigth);
    }
    randomMovimento(direita) {
        let botao = this.barra.botoes;
        this.barra.controleMaquina(botao);
        let max = 0;
        if(direita == "yes")
        max = this.tela.clientWidth
        setInterval(() => {

            let distancia = max - this.bola.X;
            let distanciaMaxima = (distancia > this.tela.clientHeight ? this.tela.clientHeight :distancia);
            let local = (Math.random() * distanciaMaxima - (distanciaMaxima/2));
            this.local = (this.bola.Y + (local / this.nivel));
            
        }, 1000 / this.nivel)

        setInterval(() => {
             
            if (this.local < this.barra.Y) {
                botao[0].click();
            }
            if (this.local > this.barra.Y){
                botao[1].click();
            }
        }, 20)
    }
}












export default Maquina;