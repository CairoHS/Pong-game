
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
        this.randomMovimento();
    }
    randomMovimento() {


        setInterval(() => {
            let distancia = this.bola.Y;
            let distanciaMaxima = (this.distancia > this.tela.clientHeigth ? this.tela.clientHeigth : this.distancia);
            this.local = Math.random() * (distanciaMaxima / 2) - distanciaMaxima;
        }, 2000 / this.nivel)

        setInterval(() => {
            if (this.local >= this.bola.X) {
                this.barra.this.botoes[0].click;
            }
            else {
                this.barra.botoes[1].click;
            }
        }, 100)
    }
}












export default Maquina;