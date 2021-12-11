class Tuercas {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    show(){
        fill(255,0,255)
        rectMode(CENTER);
        rect(this.x,this.y,75)
        rectMode(CORNER);

    }
}