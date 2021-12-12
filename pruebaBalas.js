class PruebaBalas {

    constructor(x,y,image){
        this.x=x;
        this.y=y;
        this.image=image;
        
    }
    show () {
        fill(0);
        image(this.image,this.x,this.y);
      
    }
    moverse () {
        this.y-=4.5;
    }

}