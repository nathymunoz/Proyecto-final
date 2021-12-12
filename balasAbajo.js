class BalasAbajo {

    constructor(x,y,image){
        this.x=x;
        this.y=y;
        this.image=image;
        
    }
    show () {
        fill(0);
        image(this.image,this.x,this.y);
        //ellipse(this.x, this.y, 3, 3);
    }
    moveProyectiles () {
        this.y+=4.5;
    }

}