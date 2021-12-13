class Espumita {
    constructor(x,y){
        this.x=x;
        this.y=y;
        //this.image=image;
        
    }
    mostrarEspumita () {
        fill(0);
        //image(this.image,this.x,this.y);
        circle(this.x, this.y, 30);
       
    }
    moverEspumita () {
        this.x+=4.5;
    }


}