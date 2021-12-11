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

let nivelActual=0; 
let niveles = [nivel1, nivel2, nivel3, nivel4];
let Ax =0;
let Ay =0;
let posIniX =[12,12,12,12];
let posIniY =[4,2,3,4];
let posFinalX =[1,0,0,0];
let posFinalY =[3,4,5,4,5,6];

let astronauta = new Astronauta(50 + 100 * posIniX[nivelActual], 50 + 100 * posIniY[nivelActual], posIniY[nivelActual], posIniX[nivelActual]);
let extintor = new Extintor();

let Ex =350;
let Ey =450;
let cambioArma = true;
let paraMove = niveles [nivelActual]


function setup() {
  createCanvas(1200, 700);
  backg1 = loadImage("./Images/mapa1.jpeg");
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
    //sigNiv(50 + 100 * posFinalX[nivelActual],50 + 100 * posFinalY[nivelActual])
    //astronauta.fila=posIniX[nivelActual]
    //astronauta.col=posIniY[nivelActual]
    break;

    case 1:
    pintarNivel(niveles[1])
    //sigNiv(50 + 100 * posFinalX[nivelActual],50 + 100 * posFinalY[nivelActual])
    //astronauta.fila=posIniX[nivelActual]
    //astronauta.col=posIniY[nivelActual]

    break;

    case 2:
    pintarNivel(niveles[2]) 
    //sigNiv(50 + 100 * posFinalX[nivelActual],50 + 100 * posFinalY[nivelActual])
    //astronauta.fila=posIniX[nivelActual]
    //astronauta.col=posIniY[nivelActual]
    break;

    case 3:
    pintarNivel(niveles[3]) 
    //sigNiv(50 + 100 * posFinalX[nivelActual],50 + 100 * posFinalY[nivelActual]||posFinalY[4]||posFinalY[5])
    //astronauta.fila=posIniX[nivelActual]
    //astronauta.col=posIniY[nivelActual]
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
    nivelActual++;
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
