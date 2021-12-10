class Astronauta{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    pintarAstronauta(Ax,Ay,cambiarColor){
        this.cambiarColor=true
        if (cambiarColor) {
            fill(255,0,0);
        } else if (cambiarColor ==false) {
            fill (0);
        }
        circle(Ax,Ay,70);
        this.x=Ax;
        this.y=Ay;
       
        

    }
    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
    

}