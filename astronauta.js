class Astronauta{
    constructor(x,y, fila, col){
        this.x=x;
        this.y=y;
        this.fila=fila;
        this.col=col;
        this.inventario =[];
        this.card = false;
    }
    pintarAstronauta(cambiarColor){
        this.cambiarColor=true
        if (cambiarColor) {
            fill(255,0,0);
        } else if (cambiarColor ==false) {
            fill (0);
        }
        circle(this.x,this.y,70);
    }
    move(nivel) {
        if((key == 'd' || key == 'D') && nivel[this.fila][this.col + 1] != 1) {
            this.x += 100;
            this.col += 1;
        }

        if((key == 'a' || key == 'A') && nivel[this.fila][this.col - 1] != 1) {
            this.x -= 100;
            this.col -= 1;
        }

        if((key == 's' || key == 'S') && nivel[this.fila + 1][this.col] != 1) {
            this.y += 100
            this.fila += 1
        }
        if((key == 'w' || key == 'W') && nivel[this.fila - 1][this.col] != 1) {
            this.y -= 100
            this.fila -= 1
        }
    }

    addInventario(){
     this.inventario=[];


    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
    

}