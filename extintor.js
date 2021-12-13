class Extintor {
    constructor() {
        this.key= 1;
        this.espumitas = [];
        this.posicionIni=0;
    }

    pintarExtiontor(x,y){
    switch (this.key) {
        case 1:
            fill(255);
            circle(x,y,20);
            break;
    
            case 2:
                fill(0);
                circle(astronauta.x,astronauta.y,90);
                for (let i = 0; i < this.espumitas.length; i++) {         
                    this.espumitas[i].mostrarEspumita ();
                    this.espumitas[i].moverEspumita ();
                    if (this.espumitas[i].x >this.posicionIni+250) {
                        this.removeItemFromArr(this.espumitas, this.espumitas[i]);
                    }
                }
            
                break;
        }
       
    }
    removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
     
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }

    recogerExtintor(key){
        this.key=key;
    }

    dispararExtintor(){
        if (this.key == 2){
         
                this.espumitas.push(new Espumita(astronauta.x,astronauta.y))
             this.posicionIni=astronauta.x;   
    
          


        }
    }

    
}
   

