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
let armas3Up= new Armas (50 + 100 * 4,50 + 100 * 0,proyectiles);
let armas1Up= new Armas (50 + 100 * 7,50 + 100 * 0,proyectiles);
let armas2Up= new Armas (50 + 100 * 10,50 + 100 * 0,proyectiles);
let armas1Down = new Armas (50 + 100 * 3,50 + 100 * 6,proyectiles);
let armas2Down = new Armas (50 + 100 * 6,50 + 100 * 6,proyectiles);
let armas3Down = new Armas (50 + 100 * 9,50 + 100 * 6,proyectiles);
let tuerca = new Tuercas();
let cuentaDeTuercas =0;

let llave = new Llave();
let deLlaves = [false,false,false,false];


let Ex =350;
let Ey =450;
let cambioArma = true;
let paraMove = niveles [nivelActual]

let enemigos = [];




function setup() {
  createCanvas(1200, 700);
  backg1 = loadImage("./Images/mapa1.jpg");
  proyectilIMG = loadImage ("/Images/bala.png");
  tuercaAfuera = loadImage ("/Images/tuercacolect.png")
  
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
    
    if (deLlaves[0] == false){
      llave.recogerLlave(1);
      llave.showLlave(50 + 100 * 10,50 + 100 * 1);

    }
      
      
      console.log(cuentaDeTuercas);
    if (cuentaDeTuercas === nivelActual){
      tuerca.recogerTuerca(1);
      tuerca.showTuerca(50 + 100 * 5,50 + 100 * 5,tuercaAfuera)
      
    } else {
      tuerca.recogerTuerca(2);
    }
    validarTuerca(5,5);
    
    validarLlave(1,10);
    break;

    case 1:
    pintarNivel(niveles[1])
    sigNiv(3,12)
    antNiv(2,-1)
    
    if (deLlaves[1] == false){
      llave.recogerLlave(1);
      llave.showLlave(50 + 100 * 10,50 + 100 * 2);
    }
    if (cuentaDeTuercas == nivelActual){
      tuerca.recogerTuerca(1);
      tuerca.showTuerca(50 + 100 * 1,50 + 100 * 5,tuercaAfuera)
    }
    
    validarLlave(2,10);

    break;

    case 2:
    pintarNivel(niveles[2]) 
    sigNiv(4,12)
    antNiv(3,-1)
    imageMode(CENTER);
    armas3Up.show();
    armas3Up.shootDown(proyectilIMG);
    armas1Up.show();
    armas1Up.shootDown(proyectilIMG);
    armas2Up.show();
    armas2Up.shootDown(proyectilIMG);
    armas3Down.show();
    armas3Down.shootUp(proyectilIMG);
    armas1Down.show();
    armas1Down.shootUp(proyectilIMG);
    armas2Down.show();
    armas2Down.shootUp(proyectilIMG);
    imageMode(CORNER);
    if (deLlaves[2] == false){
      llave.recogerLlave(1);
      llave.showLlave(50 + 100 * 1,50 + 100 * 5);
    }
    if (cuentaDeTuercas == nivelActual){
      tuerca.recogerTuerca(1);
      tuerca.showTuerca(50 + 100 * 3,50 + 100 * 3,tuercaAfuera)
    }
    
    validarLlave(5,1);
    
    break;

    case 3:
    pintarNivel(niveles[3]) 
    sigNiv(4,12)
    antNiv(4,-1)
    
    if (deLlaves[3] == false){
      llave.recogerLlave(1);
      llave.showLlave(50 + 100 * 8,50 + 100 * 5);
    }
    if (cuentaDeTuercas == nivelActual){
      tuerca.recogerTuerca(1);
      tuerca.showTuerca(50 + 100 * 10,50 + 100 * 1,tuercaAfuera)
    }
    
    validarLlave(5,8);
    break;
  }
  astronauta.pintarAstronauta(Ax,Ay,cambioArma);
  
  if(nivelActual == 0){
    extintor.pintarSuelo(Ex,Ey);
  }
  
 astronauta.addInventario();
 
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
  if (astronauta.fila==filaGana && astronauta.col==colGana && deLlaves [nivelActual]) {
    if(nivelActual < 3) {
      astronauta.x = 50 + 100 * posIniX[nivelActual + 1]
      astronauta.col = posIniX[nivelActual + 1]
      astronauta.y = 50 + 100 * posIniY[nivelActual + 1]
      astronauta.fila = posIniY[nivelActual + 1]
    }
    nivelActual++;

  } else if (astronauta.fila==filaGana && astronauta.col==colGana){
      astronauta.x = 50 + 100 * posFinalX[nivelActual]
      astronauta.col = posFinalX[nivelActual ]
      astronauta.y = 50 + 100 * posFinalY[nivelActual]
      astronauta.fila = posFinalY[nivelActual]

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
  extintor.cambiarAlcanze()
  
}
function validarLlave(llaveFila,llaveCol){
  
  if(astronauta.fila == llaveFila && astronauta.col == llaveCol){
    deLlaves[nivelActual] = true;
    llave.recogerLlave(2);

  }
}

function validarTuerca(tuercaFila,tuercaCol){
  
  if(astronauta.fila == tuercaFila && astronauta.col == tuercaCol){
    
    tuerca.recogerTuerca(2);
    cuentaDeTuercas=nivelActual+1;

  }
}