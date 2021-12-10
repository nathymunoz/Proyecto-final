class Astronauta{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    pintarAstronauta(Ax,Ay){
        fill(1);
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