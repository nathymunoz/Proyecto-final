class Armas {
    constructor(x,y,balas){
        this.x = x;
        this.y = y;
        this.balas=balas;
    }

    shootDown() {
        
        this.balas.push(new BalasAbajo(this.x, this.y, 5))

        for (let i = 0; i < balas.length; i++) {
            this.balas[i].show()
            this.balas[i].move()
        }
        

    }
    shootUp() {
        
        this.balas.push(new BalasArriva(this.x, this.y, 5))

        for (let i = 0; i < balas.length; i++) {
            this.balas[i].show()
            this.balas[i].move()
        }
        

    }
}