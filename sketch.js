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

let nivelActual=5; 


let niveles = [nivel1, nivel2, nivel3, nivel4];
let Ax =0;
let Ay =0;
let posIniX =[1,0,0,0];
let posIniY =[4,2,3,4];
let posFinalX =[11,11,11,11];
let posFinalY =[2,3,4,3,4,5];
let proyectiles = [];
let armas = [];
let crearAstronauta = false;

//armas
let proyectilIMG;

let astronauta;
let extintor = new Extintor();
let armas3Up= new Armas (50 + 100 * 4,50 + 100 * 0,proyectiles);
let armas1Up= new Armas (50 + 100 * 7,50 + 100 * 0,proyectiles);
let armas2Up= new Armas (50 + 100 * 10,50 + 100 * 0,proyectiles);
let armas4Up= new Armas (50 + 100 * 4,50 + 100 * 0,proyectiles);
let armas1Down = new Armas (50 + 100 * 3,50 + 100 * 6,proyectiles);
let armas2Down = new Armas (50 + 100 * 6,50 + 100 * 6,proyectiles);
let armas3Down = new Armas (50 + 100 * 9,50 + 100 * 6,proyectiles);
let armas4Down = new Armas (50 + 100 * 6,50 + 100 * 6,proyectiles);
let tuerca = new Tuercas();
let cuentaDeTuercas =0;

//coleccionables
let llave = new Llave();
let deLlaves = [false,false,false,false];


let Ex =350;
let Ey =450;
let cambioArma = true;
let paraMove = niveles [nivelActual]

//enemigos
let enemigo1 = new Enemigos (830, 130, 1, 8, nivel1);
let enemigo2 = new Enemigos (630, 230, 2, 6, nivel2);
let enemigo3 = new Enemigos (230, 530, 2, 5, nivel2);
let enemigo4 = new Enemigos (1030, 430, 2, 10, nivel2);
let enemigo5 = new Enemigos (1030, 430, 8, 4, nivel4);

let enemigosImg;

//imagenes secundarias
let luz;
let luz2;

//imagenes de fondo
let backg1;
let backg2;
let backg3;
let backg4;


function setup() {
  createCanvas(1200, 700);
  //fondo
  backg1 = new loadImage("./Images/mapa1.jpg");
  backg2 = new loadImage("./Images/mapa2.jpg");
  backg3 = new loadImage("./Images/mapa3.jpg");
  backg4 = new loadImage("./Images/mapa4.jpg");
  inicioPan = new loadImage("./Images/pantalla.jpg")

  //imagenes secundarias
  luz = new loadImage("./Images/luz.png")
  luz2 = new loadImage("./Images/luz2.png")


  proyectilIMG = loadImage ("./Images/bala.png");
  tuercaAdentro = loadImage ("./Images/tuerca.png")
  tuercaAfuera = loadImage ("./Images/tuerca.png");
  enemigosIMG = loadImage ("./Images/enemigo1.png");


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
      
      if (crearAstronauta){
        astronauta = new Astronauta(50 + 100 * posIniX[nivelActual], 50 + 100 * posIniY[nivelActual], posIniY[nivelActual], posIniX[nivelActual]);
        crearAstronauta = false;
      } 
    pintarNivel(niveles[0]) 
    
    sigNiv(2,12)

    imageMode(CORNER);
        image(backg1, 0, 0, 1200, 700);

    
    if (deLlaves[0] == false){
      llave.recogerLlave(1);
      llave.showLlave(50 + 100 * 10,50 + 100 * 1);

      imageMode(CORNER);
      image(luz, 1000, 100, 100, 100);

    }
    
      
    if (cuentaDeTuercas === nivelActual){
      tuerca.recogerTuerca(1);
      tuerca.showTuerca(50 + 100 * 5,50 + 100 * 5,tuercaAfuera)

      imageMode(CORNER);
    image(luz, 500, 500, 100, 100);

    } else {
      tuerca.recogerTuerca(2);
    }
    validarTuerca(5,5);
    
    validarLlave(1,10);

    imageMode(CORNER);
    image(luz2, 300, 400, 100, 100);

    enemigo1.show();
    enemigo1.move();

    extintor.pintarExtiontor(Ex,Ey);
    validarExtintor(4,3);
    validarEnemigo();


    break;

    case 1:
    pintarNivel(niveles[1])
    sigNiv(3,12)
    antNiv(2,-1)

    imageMode(CORNER);
        image(backg2, 0, 0, 1200, 700);

    
    if (deLlaves[1] == false){
      llave.recogerLlave(1);
      llave.showLlave(50 + 100 * 10,50 + 100 * 2);

      imageMode(CORNER);
    image(luz, 1000, 200, 100, 100);

    }
    if (cuentaDeTuercas === nivelActual){
      tuerca.recogerTuerca(1);
      tuerca.showTuerca(50 + 100 * 1,50 + 100 * 5)

      imageMode(CORNER);
    image(luz, 100, 500, 100, 100);

    }else {
      tuerca.recogerTuerca(2);


    }
    validarTuerca(5,1);
    
    validarLlave(2,10);

    enemigo2.show();
    enemigo3.show();
    enemigo4.show();
    
    extintor.pintarExtiontor(Ex,Ey);
    extintor.recogerExtintor(2);

    break;

    case 2:
    pintarNivel(niveles[2]) 
    sigNiv(4,12)
    antNiv(3,-1)

    imageMode(CORNER);
    image(backg3, 0, 0, 1200, 700);

    imageMode(CENTER);
    armas3Up.show();
    armas3Up.shootDown(proyectilIMG);
    armas1Up.show();
    armas1Up.shootDown(proyectilIMG);
    //armas2Up.show();
    //armas2Up.shootDown(proyectilIMG);
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

      imageMode(CORNER);
    image(luz, 100, 500, 100, 100);

    }
    if (cuentaDeTuercas === nivelActual){
      tuerca.recogerTuerca(1);
      tuerca.showTuerca(50 + 100 * 3,50 + 100 * 3)

      imageMode(CORNER);
    image(luz, 300, 300, 100, 100);

    }else {
      tuerca.recogerTuerca(2);
    }
    validarTuerca(3,3);
    
    validarLlave(5,1);

    validateImpact();
    extintor.pintarExtiontor(Ex,Ey);
    extintor.recogerExtintor(2);
    
    break;

    case 3:
    pintarNivel(niveles[3]) 
    sigNiv(4,12)
    antNiv(4,-1)

    imageMode(CORNER);
        image(backg4, 0, 0, 1200, 700);
    
    if (deLlaves[3] == false){
      llave.recogerLlave(1);
      llave.showLlave(50 + 100 * 8,50 + 100 * 5);

      imageMode(CORNER);
    image(luz, 800, 500, 100, 100);

    }
    if (cuentaDeTuercas === nivelActual){
      tuerca.recogerTuerca(1);
      tuerca.showTuerca(50 + 100 * 10,50 + 100 * 1)

      imageMode(CORNER);
    image(luz, 1000, 100, 100, 100);

    }else {
      tuerca.recogerTuerca(2);
    }
    validarTuerca(1,10);
    
    validarLlave(5,8);
    imageMode(CENTER);
    armas4Up.show();
    armas4Up.shootDown(proyectilIMG);
    armas4Down.show();
    armas4Down.shootUp(proyectilIMG);
    imageMode(CORNER);

    enemigo5.show();
    extintor.pintarExtiontor(Ex,Ey);
    extintor.recogerExtintor(2);

    break;

    case 5:
      imageMode(CORNER);
        image(inicioPan, 0, 0, 1200, 700);
      noFill ();
      noStroke ();
      rect(943,565,203,80);


  }

  if (nivelActual != 5) {
    astronauta.pintarAstronauta(Ax,Ay);
    
  }
  
 //astronauta.addInventario();
 
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
  if(nivelActual !=5){
  astronauta.move(niveles [nivelActual])

  }
  if(nivelActual !=5 && key == 'e'){
    extintor.dispararExtintor();
   
  }


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

function validarExtintor(extintorFila,extintorCol){

  if(astronauta.fila == extintorFila && astronauta.col == extintorCol){
    
    extintor.recogerExtintor(2);
   
  }
}

function validateImpact(){
  if (dist(astronauta.getX,astronauta.getY,proyectiles.x,proyectiles.y)<35) {
    console.log("hello");

  }
}

function validarEnemigo() {
  if (dist(astronauta.getX(), astronauta.getY(), enemigo1.x, enemigo1.y) < 50) {
      console.log("XD")
  }
  }

function mousePressed() {

  if (mouseX >  943 && mouseX < 943+203 && mouseY > 565 && mouseY < 565+80 && nivelActual == 5){
    nivelActual=nivelActual-5;
    crearAstronauta = true;
  }

}