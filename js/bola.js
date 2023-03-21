
class Bola {
    constructor(telaDoJogo, barraR, barraL, placar) {
        this.tela = telaDoJogo;
        this.diametro = 15;
        this.Y = (window.innerHeight / 2)
        this.X = (window.innerWidth / 2)
        this.vel = [3, 2];
        this.aceleracao = 0.5;
        this.esfera;
        this.barra1 = barraR;
        this.barra2 = barraL
        this.placar = placar;
        this.comecar();
    }
    comecar() {
        this.colonaNaTela();
        this.movimentoEsfera();
    }
    colonaNaTela() {
        let esfera = document.createElement("div");
        this.esfera = esfera;
        this.mudaLocalização();
        esfera.className = "esfera";
        esfera.style.width = this.diametro + 'px';
        esfera.style.height = this.diametro + 'px';
        esfera.style.transition = "15ms all cubic-bezier(1, 1, 0, 0)";
        this.esfera = esfera;
        this.tela.appendChild(esfera);
    }

    movimentoEsfera() {
        setInterval(() => {
            this.X += this.vel[0];
            this.Y += this.vel[1];
            if (this.Y + (this.diametro / 2) >= this.tela.clientHeight || this.Y - (this.diametro / 2) <= 0) {
                this.Y -= this.vel[1] * 2;
                this.vel[1] = -this.vel[1];
            }
            if (this.X + (this.diametro / 2) > this.tela.clientWidth || this.X - (this.diametro / 2) < 0) {
                this.X -= this.vel[0] * 2;
                this.vel[0] = -this.vel[0];
            }
            this.colisao();
            this.ponto();
            this.mudaLocalização();
        },15)

        setInterval(() =>{
       
        },15)
    }

    mudaLocalização() {
        this.esfera.style.top = this.Y + "px";
        this.esfera.style.left = this.X + "px";
    }
    colisao() {
        if (this.Y <= this.barra1.Y + this.barra1.barra.clientHeight/2 && this.Y >= this.barra1.Y - this.barra1.barra.clientHeight/2){
            if (this.X + (this.diametro/2) >= (this.barra1.X - 1)) {
                this.X -= (this.vel[0] * 2);
                this.vel[0] = -(this.vel[0] + this.aceleracao);
                this.vel[1] += +((Math.random() * 2) - 1).toFixed(2);
                console.log(this.vel[0],this.vel[1]);
            }
        }
        if (this.Y <= this.barra2.Y + this.barra2.barra.clientHeight/2 && this.Y >= this.barra2.Y - this.barra2.barra.clientHeight/2){
           
            if (this.X - (this.diametro/2) <= (this.barra2.X + this.barra2.barra.clientWidth + 1)) {
                this.X -= (this.vel[0] * 2);
                this.vel[0] = -(this.vel[0] - this.aceleracao);
                this.vel[1] += +((Math.random() * 2) - 1).toFixed(2);
                console.log(this.vel[0],this.vel[1]);
            }
        }
    }

    ponto() {
        if(this.X <= (this.diametro/2) + 2){
            this.placar.aumentaPonto(1);
        }
        if(this.X >= this.tela.clientWidth - (this.diametro/2)  - 2){
            this.placar.aumentaPonto(0);
        }

    }
}

export default Bola;