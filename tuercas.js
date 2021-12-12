class Tuercas {
    constructor(image){
        this.key=1
        this.image=image;
    }
    showTuerca(x,y,image){
        switch (key) {
            case 1:
                fill(255,0,255)
                rectMode(CENTER);
                image(this.image,x,y,75)
                rectMode(CORNER);
            
                break;
        
            case 2:

            
                break;
        }
       
    }
    recogerTuerca(key){
        this.key=key;
    
    }
}