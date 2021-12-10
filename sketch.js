let nivel1 = [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,0,0,0,0,0,0,0,0,1],
  [1,1,1,0,0,0,0,0,0,0,0,0],
  [1,1,1,0,1,0,1,1,1,1,1 ,1],
  [1,0,1,0,1,0,1,1,1,1,1 ,1],
  [1,0,0,0,1,0,1,1,1,1,1 ,1],
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

let astronauta = new Astronauta(50 + 100 * posIniX[0], 50 + 100 * posIniY[0], posIniY[0], posIniX[0]);
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
    break;

    case 1:
    pintarNivel(niveles[1])
    break;

    case 2:
    pintarNivel(niveles[2]) 
    break;

    case 3:
    pintarNivel(niveles[3]) 
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

function keyPressed(){
  /*let matriz = niveles [nivelActual]
  for (let fila = 0; fila < 7; fila++) {
    for (let col = 0; col < 12; col++) {
      if (matriz [fila][col] == 0) {
        
        switch (key) {
          case 'a':
            Ax=Ax-100; 
            if (Ax<0) {
              nivelActual--;
              Ax =Ax+1200
            }
          break;
          case 's':
            Ay=Ay+100;
          break;
          case 'w':
            Ay=Ay-100;
          break;
          case 'd':
            Ax=Ax+100;
            if (matriz [fila][12] && 'd') {
              if (nivelActual<3) {
                nivelActual++;
                Ax =Ax-1200;
              } else if (nivelActual == 3 && Ax>1250){
                Ax =1250;
              }
              break;
            }
          }
        }
      }
      //console.log(nivelActual);
      console.log(Ax);
   
  }*/
  
  astronauta.move()
  
  
  if(key =='f'){
    cambioArma =!cambioArma;
    console.log(cambioArma);
  } else {

  }
}
