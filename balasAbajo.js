class BalasAbajo {

    constructor(x,y){
        this.x=x;
        this.y=y;
        
    }
    show () {
        fill(0);
        ellipse(this.x, this.y, 3, 3);
    }
    moveProyectiles () {
        this.y+=1;
    }

}