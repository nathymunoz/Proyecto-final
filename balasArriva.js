class DispararArriba{

    constructor(x,y,image){
        this.x=x;
        this.y=y;
        this.image=image;
        
    }
    showUp () {
        fill(0);
        image(this.image,this.x,this.y);
        //ellipse(this.x, this.y, 3, 3);
    }
    dipararUp () {
        this.y-=4.5;
    }
    
}