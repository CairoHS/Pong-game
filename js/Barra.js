class Barra {
  constructor(game, player, nivel, lado, dispositivoMovel) {
    this.game = game;
    this.barra = document.createElement('div');
    this.x = 0;
    this.y = 0;
    this.lado = lado;
    this.dispositivoMovel = dispositivoMovel;
    this.player = player;
    this.nivel = nivel;
    this.botoes = ['cima', 'baixo'];
    this.velocidade = 20;
  }

  iniciar() {
    this.#criaElemento(this.game);
    this.#colocaPosicao(this.game, this.lado);
    this.botoes = [
      this.#criaBotao(this.botoes[0], -this.velocidade),
      this.#criaBotao(this.botoes[1], this.velocidade),
    ];
  }

  #criaElemento(jogo) {
    this.barra.className = 'game__barra';
    jogo.appendChild(this.barra);
  }

  #colocaPosicao(game, lado) {
    const distanciaDaParede = (game.clientWidth / 100) * 3;
    this.y = game.clientHeight / 2;
    this.x = lado ? game.clientWidth - distanciaDaParede : distanciaDaParede;
    this.barra.style.left = `${this.x}px`;
    this.#atualizaPosicao();
  }

  #atualizaPosicao() {
    this.barra.style.top = `${this.y}px`;
  }

  #saberDispositivo() {
    if (this.dispositivoMovel === 'yes') {
      return ['touchstart', 'touchend'];
    }
    this.#cliqueDesktop();
    return ['move', 'para'];
  }

  #criaBotao(botao, numero) {
    const eventos = this.#saberDispositivo(this.tela);
    const div = document.createElement('div');
    div.className = `game__botao game__botao--${botao} game__botao--${this.lado ? 'direita' : 'esquerda'}`;
    this.game.appendChild(div);
    let intervalos;

    div.addEventListener(eventos[0], () => {
      clearInterval(intervalos);
      intervalos = setInterval(() => {
        if (!this.#movimentoLimite(numero)) {
          this.y += numero;
        }
        this.#atualizaPosicao();
      }, 50);
    }, { passive: true });

    div.addEventListener(eventos[1], () => {
      clearInterval(intervalos);
    });
    return div;
  }

  #cliqueDesktop() {
    const move = new Event('move');
    const para = new Event('para');
    const teclas = this.lado ? ['ArrowUp', 'ArrowDown'] : ['KeyW', 'KeyS'];
    let text;
    document.addEventListener('keydown', (e) => {
      if (e.code === teclas[0]) {
        if (text !== e.code) {
          text = e.code;
          this.botoes[0].dispatchEvent(move);
        }
      } else if (e.code === teclas[1]) {
        if (text !== teclas[1]) {
          this.botoes[1].dispatchEvent(move);
          text = e.code;
        }
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.code === teclas[0]) {
        this.botoes[0].dispatchEvent(para);
        text = '';
      } else if (e.code === teclas[1]) {
        this.botoes[1].dispatchEvent(para);
        text = '';
      }
    });
  }

  #movimentoLimite(numero) {
    const posicaoInferior = this.y + numero - this.barra.clientHeight / 2 + 20;
    const posicaoSuperior = this.y + numero + this.barra.clientHeight / 2 - 20;
    return posicaoSuperior > this.game.clientHeight || posicaoInferior < 0;
  }
}

export default Barra;
