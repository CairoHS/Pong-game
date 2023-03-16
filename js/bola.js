
class Bola {
    constructor(telaDoJogo, barra1, barra2) {
        this.tela = telaDoJogo;
        this.diametro = 15;
        this.Y = (window.innerHeight / 2)
        this.X = (window.innerWidth / 2)
        this.esfera;
        this.barra1 = barra1;
        this.barra2 = barra2
        this.vel = [1, 1];
        this.comecar();
        this.barra;
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
            this.mudaLocalização();

        }, 15)
    }

    mudaLocalização() {
        this.esfera.style.top = this.Y + "px";
        this.esfera.style.left = this.X + "px";
    }
    colisao() {
      
        if (this.Y <= this.barra1.Y + this.barra1.barra.clientHeight && this.Y >= this.barra1.Y - this.barra1.barra.clientHeight) {
        
            if (this.X >= window.innerWidth - this.barra1.X - 2) {
                this.X -= this.vel[0] * 2;
                this.vel[0] = -this.vel[0];
            }
        }
        if (this.Y <= this.barra2.Y + this.barra2.barra.clientHeight && this.Y >= this.barra2.Y - this.barra2.barra.clientHeight) {
        
            if (this.X <= this.barra2.X  + this.barra2.barra.clientWidth + 2) {
                this.X -= this.vel[0] * 2;
                this.vel[0] = -this.vel[0];
            }
        }
    }
}

export default Bola;