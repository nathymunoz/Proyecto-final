class Llave {
    constructor() {
      
        this.key=1
    }

    showLlave(x,y){
        switch (this.key) {
            case 1:
                rectMode(CENTER);
                fill(255,255,0);
                rect(x,y,25);
                rectMode(CORNER);
                
                break;
        
            case 2:

            
                break;
        }
       
    }
    recogerLlave(key){
        this.key=key;
        

    }
}