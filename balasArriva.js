class BalasArriva{

    constructor(x,y, image){
        this.x=x;
        this.y=y;
        this.image =image
    }
    show () {
        image(this.image,this.x,this.y)
    }

    move() {
        this.y-=1;
    }
    
}