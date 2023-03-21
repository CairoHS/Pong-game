class Placar {
    constructor(jogo){
        this.tela = jogo;
        this.placarJogo = ["",""];
        this.pontos = [0,0];
        this.comecar();
    }
    comecar(){
        this.criaPlacar(this.placarJogo);
    }
    criaPlacar(conjuntoPlacar){
        console.log(conjuntoPlacar.length)
        for( let i = 0; i < conjuntoPlacar.length; i++){
             let placar = document.createElement("span");
             this.placarJogo[i] = placar;
            placar.style.position = "absolute";
            placar.style.top = this.tela.clientHeight / 2 + "px";
            placar.style.left = this.tela.clientWidth / 2 * ( i == 0 ? 0.7 : 1.3 ) + "px";
            placar.style.transform = "translate(-50%,-50%)";
            placar.style.width = "10%";
            placar.style.height = "25%"
            placar.textContent = 0;
            placar.style.fontSize = "4rem ";
            placar.style.backgroundColor = "transparent";
            placar.style.color= "white";
            placar.style.opacity ="0.5"
            this.tela.appendChild(placar);  
        }
    }   

    aumentaPonto(entrada){
        console.log(entrada);
        this.pontos[entrada] += 1;
        this.placarJogo[entrada].textContent = this.pontos[entrada];

    }
}




export default Placar