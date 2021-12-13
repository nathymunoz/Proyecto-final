class Tuercas {
    constructor(){
        this.key=1
        
    }
    showTuerca(x,y){
        switch (this.key) {
            case 1:
                fill(255,0,255)
                //rect(x,y,75)
                imageMode(CENTER);
        image(tuercaImg,x,y);
                //image(this.image,x,y);
                
            
                break;
        
            case 2:

            
                break;
        }
       
    }
    recogerTuerca(key){
        this.key=key;
    
    }
}