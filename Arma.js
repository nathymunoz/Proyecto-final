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
    shootDown(image) {
        
        
        if (frameCount % 70 == 0) {
            this.proyectiles.push(new BalasAbajo(this.x, this.y,image))

        }    

        for (let i = 0; i < proyectiles.length; i++) {
           
            this.proyectiles[i].show ();
            this.proyectiles[i].moveProyectiles ();
            if (this.proyectiles[i].y >700) {
                this.removeItemFromArr(this.proyectiles, this.proyectiles[i]);
            }
            
        }
        
        
       

    }
    shootUp(image) {
        if (frameCount % 70 == 0) {
            this.proyectiles.push(new PruebaBalas(this.x, this.y,image))

        }    

        for (let i = 0; i < proyectiles.length; i++) {
           
            this.proyectiles[i].show ();
            this.proyectiles[i].moverse ();
            if (this.proyectiles[i].y >700) {
                console.log(this.proyectiles.length);
            this.removeItemFromArr(this.proyectiles, this.proyectiles[i]);
            
            }
            
        }

    }

    removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
     
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
}