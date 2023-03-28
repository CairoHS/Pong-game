class Bola {
  constructor(game, barraEsquerda, barraDireita) {
    this.game = game;
    this.bola = document.createElement('div');
    this.raio = 7.5;
    this.esfera = document.createElement('div');
    this.x = this.game.clientWidth / 2;
    this.y = this.game.clientHeight / 2;
    this.barraEsquerda = barraEsquerda;
    this.barraDireita = barraDireita;
    this.velocidade = [5, 5];
  }

  iniciar() {
    this.#colocaElemento();
    this.#atualizaPosicao();
    this.mover();
  }

  #colocaElemento() {
    this.bola.className = 'game__bola';
    this.game.appendChild(this.bola);
  }

  #atualizaPosicao() {
    this.bola.style.left = `${this.x}px`;
    this.bola.style.top = `${this.y}px`;
  }

  mover() {
    setInterval(() => {
      this.x += this.velocidade[0];
      this.y += this.velocidade[1];
      this.#colisaoParede();
      this.#colisaoBarra();
      this.#atualizaPosicao();
    }, 20);
  }

  #colisaoParede() {
    if (this.y + this.raio > this.game.clientHeight || this.y - this.raio < 0) {
      this.velocidade[1] = -this.velocidade[1];
    }
  }

  #colisaoBarra() {
    const metadeBarraAltura = this.barraDireita.barra.clientHeight / 2 + 5;
    const metadeBarraLargura = this.barraDireita.barra.clientWidth / 2;

    if (this.x + this.raio > this.barraDireita.x - metadeBarraLargura
      && this.x + this.raio < this.barraDireita.x + metadeBarraLargura) {
      if (this.y + this.raio < this.barraDireita.y + metadeBarraAltura
        && this.y - this.raio > this.barraDireita.y - metadeBarraAltura) {
        this.velocidade[0] = -this.velocidade[0];
        this.x += this.velocidade[0];
      }
    }

    if (this.x - this.raio < this.barraEsquerda.x + metadeBarraLargura
      && this.x - this.raio > this.barraEsquerda.x - metadeBarraLargura) {
      if (this.y + this.raio < this.barraEsquerda.y + metadeBarraAltura
         && this.y - this.raio > this.barraEsquerda.y - metadeBarraAltura) {
        this.velocidade[0] = -this.velocidade[0];
        this.x += this.velocidade[0];
      }
    }
  }
}
export default Bola;
