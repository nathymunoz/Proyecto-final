class Extintor extends Astronauta{
    constructor(x,y){
        super(x,y);
        this.cambio= true;
    }
    pintarSuelo(x,y){
        if(this.cambio==true){
            fill (255,0,0);
        } else if (this.cambio == false){
            fill (0);
        }
        circle(x,y,20);

    }
    
    cambio(){
        this.cambio=true;
    }

    cambiarAlcanze(){
        if (key == 'f'){
            this.cambio=!this.cambio;
        
            
        }
    
    }
   

}