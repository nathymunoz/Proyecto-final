class Enemigo1 {
    constructor(x, y, fila, columna, mat) {
      this.x = x;
      this.y = y;
      this.fila = fila;
      this.columna = columna;
      this.mat = mat;
      //this.image = image;
    }
  
    show() {
      fill(255, 0, 0);
      //image(this.image,this.x,this.y);
      rect(this.x, this.y, 40, 40);
    }
  
    getX() {
      return this.x;
    }
  
    getY() {
      return this.y;
    }
  
    getPuntos() {
      return this.puntos;
    }
  
    moveEne(mat) {
      let dir = parseInt(random(4));
      switch (dir) {
        case 0:
          if (this.col - 1 >= 0 && this.mat[this.fila][this.col - 1] === 0) {
            this.x -= 100;
            this.col--;
          }
          break;
        case 1:
          if (this.col + 1 < this.mat[0].length && this.mat[this.fila][this.col + 1] === 0) {
            this.x += 100;
            this.col++;
          }
          break;
        case 2:
          if (this.fila - 1 >= 0 && this.mat[this.fila - 1][this.col] === 0) {
            this.y -= 100;
            this.fila--;
          }
          break;
        case 3:
          if (this.fila + 1 < this.mat[0].length && this.mat[this.fila + 1][this.col] === 0) {
            this.y += 100;
            this.fila++;
          }
          break;
      }
    }
  
  }