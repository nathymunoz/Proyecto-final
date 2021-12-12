class Extintor extends Astronauta{
    constructor(x,y){
        super(x,y);
        this.cambio= true;
    }
    pintarSuelo(x,y){
        fill(255);
        circle(x,y,20);

    }
    
}
   

