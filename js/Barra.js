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
  }

  iniciar() {
    this.#criaElemento(this.game);
    this.#colocaPosicao(this.game, this.lado);
    this.#criaBotoes(this.dispositivoMovel, this.lado);
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

  #criaBotoes() {
    const botao1 = document.createElement('div');
    const botao2 = document.createElement('div');

    botao1.className = `game__botao game__botao--cima game__botao--${this.lado ? 'direita' : 'esquerda'}`;
    botao2.className = `game__botao game__botao--baixo game__botao--${this.lado ? 'direita' : 'esquerda'}`;
    this.game.appendChild(botao1);
    this.game.appendChild(botao2);

    if (this.dispositivoMovel === 'yes') {
      this.#botoesmobile(botao1, botao2);
    } else {
      this.#botoesDesktop(botao1, botao2);
    }
  }

  #botoesmobile(botao1, botao2) {
    let intervalos;
    botao1.addEventListener('touchstart', () => {
      clearInterval(intervalos);
      intervalos = setInterval(() => {
        if (this.y > this.barra.clientHeight / 2) {
          this.y -= 20;
        }
        this.#mudaPosicao();
      }, 50);
    }, { passive: true });

    botao1.addEventListener('touchend', () => {
      clearInterval(intervalos);
    });

    botao2.addEventListener('touchstart', () => {
      clearInterval(intervalos);
      intervalos = setInterval(() => {
        if (this.y < this.game.clientHeight - (this.barra.clientHeight / 2)) {
          this.y += 20;
        }
        this.#mudaPosicao();
      }, 50);
    }, { passive: true });

    botao2.addEventListener('touchend', () => {
      clearInterval(intervalos);
    });
  }

  #botoesDesktop(botao1, botao2) {
    let keys1 = '';
    let keys2 = '';
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        keys1 = event.key;
      }
    });
  }

  #mudaPosicao() {
    this.barra.style.top = `${this.y}px`;
  }
}

export default Barra;
