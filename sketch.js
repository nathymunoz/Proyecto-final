let nivel1 = [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,1],
  [1,1,1,0,0,0,0,0,0,0,0,0],
  [1,1,1,0,1,0,1,1,1,1,1,1],
  [1,0,1,0,1,0,1,1,1,1,1,1],
  [1,0,0,0,1,0,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1]
];

let nivel2 = [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,1,0,1],
  [1,0,0,0,0,1,1,1,0,1,0,0],
  [1,1,1,1,0,0,0,0,0,1,0,1],
  [1,0,0,0,0,0,1,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1]
];

let nivel3 = [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,1,1],
  [1,0,1,1,1,1,1,1,1,0,1,1],
  [0,0,1,0,0,0,0,0,0,0,1,1],
  [1,1,1,1,1,1,0,1,1,1,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1]
];

let nivel4 = [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,0,1,1,1,1,1,1,1],
  [1,0,1,1,0,1,0,0,0,0,0,0],
  [0,0,1,1,0,1,0,1,0,0,0,0],
  [1,0,1,1,0,0,0,1,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1]
];

let nivelActual=2; 
let niveles = [nivel1, nivel2, nivel3, nivel4];
let Ax =0;
let Ay =0;
let posIniX =[1,0,0,0];
let posIniY =[4,2,3,4];
let posFinalX =[11,11,11,11];
let posFinalY =[2,3,4,3,4,5];
let proyectiles = [];
let armas = [];
let posAX = [
  //arriva
  [4,7,10], //0
  [5] //1
  //abajo
  [3,6,9], //2
  [7] //3 
];
let posAY = [
  [0,6]
];
let proyectilIMG;

let astronauta = new Astronauta(50 + 100 * posIniX[nivelActual], 50 + 100 * posIniY[nivelActual], posIniY[nivelActual], posIniX[nivelActual]);
let extintor = new Extintor();
let armas3Up= new Armas (50 + 100 * 4,50 + 100 * 0,proyectiles)



let Ex =350;
let Ey =450;
let cambioArma = true;
let paraMove = niveles [nivelActual]


function setup() {
  createCanvas(1200, 700);
  backg1 = loadImage("./Images/mapa1.jpg");
  proyectilIMG = loadImage ("/Images/bala.png");
  proyectiles.push(new Proyectiles(50 + 100 * 4,50, proyectilIMG));
  switch (nivelActual) {
    case 0:
    Ax=posIniX[0]*100+50;
    Ay=posIniY[0]*100+50;
    break;

    case 1:
    Ax=posIniX[1]*100+50;
    Ay=posIniY[1]*100+50;
    break;

    case 2:
    Ax=posIniX[2]*100+50;
    Ay=posIniY[2]*100+50;
    break;

    case 3:
    Ax=posIniX[3]*100+50;
    Ay=posIniY[3]*100+50;
    break;
  }
}

function draw() {
  background (backg1);
  
  switch (nivelActual) {
    case 0:
    pintarNivel(niveles[0]) 
    sigNiv(2,12)
    
    break;

    case 1:
    pintarNivel(niveles[1])
    sigNiv(3,12)
    antNiv(2,-1)

    break;

    case 2:
    pintarNivel(niveles[2]) 
    sigNiv(4,12)
    antNiv(3,-1)
    armas3Up.show();
    armas3Up.shootDown();
    
    break;

    case 3:
    pintarNivel(niveles[3]) 
    sigNiv(4,12)
    antNiv(4,-1)
    break;
  }
  astronauta.pintarAstronauta(Ax,Ay,cambioArma);
  
  if(nivelActual == 0){
    extintor.pintarSuelo(Ex,Ey);
  }
  if (Ax == Ex && Ay == Ey){


  }
 
}

function pintarNivel(nivel){

  for (let fila = 0; fila < 7; fila++) {
    for (let col = 0; col < 12; col++) {
      if (nivel [fila][col] == 0) {
        fill(255);
      } else {
        fill(47, 83, 115);
      }
      rect(col*100, fila*100, 100, 100);
      
    } 
  }
}

function sigNiv(filaGana,colGana){
  if (astronauta.fila==filaGana && astronauta.col==colGana) {
    if(nivelActual < 3) {
      astronauta.x = 50 + 100 * posIniX[nivelActual + 1]
      astronauta.col = posIniX[nivelActual + 1]
      astronauta.y = 50 + 100 * posIniY[nivelActual + 1]
      astronauta.fila = posIniY[nivelActual + 1]
    }
    nivelActual++;
  }
}

function antNiv(filaAnt,colAnt){
  if (astronauta.fila==filaAnt && astronauta.col==colAnt) {
    if(nivelActual >1 || nivelActual < 4) {
      astronauta.x = 50 + 100 * posFinalX[nivelActual - 1];
      astronauta.col = posFinalX[nivelActual - 1];
      astronauta.y = 50 + 100 * posFinalY[nivelActual - 1]
      astronauta.fila = posFinalY[nivelActual - 1]
    }
    nivelActual--;
  }
}

function keyPressed(){
  astronauta.move(niveles [nivelActual])
  
  if(key =='f'){
    cambioArma =!cambioArma;
    console.log(cambioArma);
  } else {

  }
}
