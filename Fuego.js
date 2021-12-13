class Fuego{

    constructor(x, y, fila, col) {
        this.x = x;
        this.y = y;
        this.fila = fila;
        this.col = col;
        this.eliminado=true;
        //this.image = image;
      }
    
      show() {
        if (this.eliminado) {
          fill(255, 0, 0);
          //image(this.image,this.x,this.y);
          rect(this.x, this.y, 40, 40);
        }
       
      }


}