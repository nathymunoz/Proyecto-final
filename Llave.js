class Llave {
    constructor() {
      
        this.key=1
    }

    showLlave(x,y){
        switch (this.key) {
            case 1:
                fill(255,255,0);
                imageMode(CENTER);
        image(llaveImg,x,y);
                //rect(x,y,25);
                
                
                break;
        
            case 2:

            
                break;
        }
       
    }
    recogerLlave(key){
        this.key=key;
        

    }
}