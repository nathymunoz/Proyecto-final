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
        
        
        if (frameCount % 60 == 0) {
            this.proyectiles.push(new BalasAbajo(this.x, this.y, 10))

        }    

        for (let i = 0; i < proyectiles.length; i++) {
           
            this.proyectiles[i].show ();
            this.proyectiles[i].moveProyectiles ();
            if (this.proyectiles[i].y >700) {
            this.removeItemFromArr(this.proyectiles,i);
            }
            
        }
        console.log(proyectiles.length);
        
       

    }
    shootUp() {
        
        this.proyectiles.push(new BalasArriva(this.x, this.y, 5))


        for (let i = 0; i < proyectiles.length; i++) {
            this.proyectiles[i].show()
            this.proyectiles[i].move()
        }
        

    }

    removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
     
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
}