
class Bola {
    constructor(telaDoJogo){
        this.tela = telaDoJogo;
        this.esfera ;
        this.comecar();
    }
    comecar(){
        this.colonaNaTela();
    }
    colonaNaTela(){
        let esfera = document.createElement("div");
        esfera.className = "esfera";
        this.esfera = esfera;
        this.tela.appendChild(esfera);
    }

}

export default Bola;