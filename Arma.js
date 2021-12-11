class Armas {
    constructor(x,y,proyectiles){
        this.x = x;
        this.y = y;
        this.proyectiles=proyectiles;
    }
    
    show() {

        fill(0);
        circle(this.x,this.y,25);
    }
    shootDown() {
        
        this.proyectiles.push(new BalasAbajo(this.x, this.y, 10))

        for (let i = 0; i < proyectiles.length; i++) {
            this.proyectiles[i].show();
            this.proyectiles[i].move();
        }
        

    }
    shootUp() {
        
        this.proyectiles.push(new BalasArriva(this.x, this.y, 5))

        for (let i = 0; i < balas.length; i++) {
            this.proyectiles[i].show()
            this.proyectiles[i].move()
        }
        

    }
}