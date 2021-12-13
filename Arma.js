class Armas {
    constructor(x,y,proyectiles){
        this.x = x;
        this.y = y;
        this.proyectiles=proyectiles;
    }
    
    show() {

        fill(255);
        noStroke();
        circle(this.x,this.y,0.1);
        
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

    validarImpactoProyectil(){
        for (let i = 0; i < this.proyectiles.length; i++) {         
            if (dist(this.proyectiles[i].x, this.proyectiles[i].y, astronauta.x, astronauta.y) < 50) {
                return true;
            } 
        }
    }
    shootUp(image) {
        
        
        if (frameCount % 70 == 0) {
            this.proyectiles.push(new BalasArriba(this.x, this.y,image))

        }    

        for (let i = 0; i < proyectiles.length; i++) {
           
            this.proyectiles[i].show ();
            this.proyectiles[i].moveProyectiles ();
            if (this.proyectiles[i].y >700) {
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