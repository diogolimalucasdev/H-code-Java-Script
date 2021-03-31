class CalcControler{
    
    constructor(){

        this._displayCalc = "0";
        this._dataAtual; 

    }

    get displayCalc(){
        
        //so devolve o que esta no atributo
        return this._displayCalc;
        
    
    }

    set displayCalc(valor){
        //altero um valor no meu atributo
        this.displayCalc = valor;
        
    }

    get dataAtual(){

        return this._dataAtual;
    }

    set dataAtual(data){

        this.dataAtual = data;
        
    }
}