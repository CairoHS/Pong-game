class Maquina {
  constructor(barra, botoes, nivel, alturaGame) {
    this.barra = barra;
    this.botoes = botoes;
    this.posicaoBola = [0, 0];
    this.nivel = nivel;
    this.previsao = 0;
    this.x = 0;
    this.y = 0;
    this.alturaGame = alturaGame;
  }

  iniciar() {
    this.#movimento();
  }

  localBola(localBola, posicaoBarra) {
    this.posicaoBola = localBola;
    [this.x, this.y] = posicaoBarra;
  }

  #movimento() {
    const move = new Event('move');
    const alturaGame = this.barra.clientHeight;
    setInterval(() => this.#aleatorioAltura(), 2000 / this.nivel);
    setInterval(() => this.#moveBarra(move, alturaGame), 20);
  }

  #pegaDistancia() {
    const distancia = (this.posicaoBola[0] - this.x) / this.nivel;
    return distancia < this.alturaGame ? distancia : this.alturaGame;
  }

  #aleatorioAltura() {
    const distancia = this.#pegaDistancia();
    const aleatorio = (Math.random() * (distancia / 2) - distancia);
    this.previsao = this.posicaoBola[1] + aleatorio;
  }

  #moveBarra(move, altura) {
    if (this.previsao >= this.y - altura / 8) {
      this.botoes[0].dispatchEvent(move);
    }
    if (this.previsao <= this.y + altura / 8) {
      this.botoes[1].dispatchEvent(move);
    }
  }
}

export default Maquina;
