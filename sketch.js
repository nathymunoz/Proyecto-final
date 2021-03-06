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
let enemigoEliminado = true;

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

let extintorImg;

let astronautaImg;

//coleccionables
let llave = new Llave();
let deLlaves = [false,false,false,false];


let Ex =350;
let Ey =450;
let cambioArma = true;
let paraMove = niveles [nivelActual]

//enemigos
let enemigo1 = new Enemigos (850, 150, 1, 8, nivel1);
let enemigo2 = new Enemigos (650, 250, 2, 6, nivel2);
let enemigo3 = new Enemigos (250, 550, 5, 2, nivel2);
let enemigo4 = new Enemigos (1050, 450, 4, 10, nivel2);
let enemigo5 = new Enemigos (950, 150, 1, 9, nivel4);

let enemigo1Img;
let enemigo2Img;

//fuego
let fuego1 =new Fuego (1050,250,10,2);
let fuego2 = new Fuego (1050,350,10,4);
let fuego3 = new Fuego (1050,450,10,5);
let fuego4 = new Fuego (1050,550,10,6);

let fuegoImg;

//imagenes secundarias
let luz;
let luz2;

let llaveImg;
let tuercaImg

//imagenes de fondo
let backg1;
let backg2;
let backg3;
let backg4;
let finalImg;


function setup() {
  createCanvas(1200, 700);
  //fondo
  backg1 = new loadImage("./Images/mapa1.jpg");
  backg2 = new loadImage("./Images/mapa2.jpg");
  backg3 = new loadImage("./Images/mapa3.jpg");
  backg4 = new loadImage("./Images/mapa4.jpg");
  inicioPan = new loadImage("./Images/pantalla.jpg")
  finalImg = new loadImage("./Images/final.jpg")

  //imagenes secundarias
  luz = new loadImage("./Images/luz.png")
  luz2 = new loadImage("./Images/luz2.png")

  fuegoImg = loadImage("./Images/fuego.png");

  proyectilIMG = loadImage ("./Images/bala.png");
  tuercaAdentro = loadImage ("./Images/tuerca.png")
  tuercaAfuera = loadImage ("./Images/tuerca.png");
  tuercaImg = loadImage ("./Images/tuerca.png");
  llaveImg = loadImage ("./Images/tarjeta.png");
  enemigo1Img = loadImage ("./Images/enemigo1.png");
  enemigo2Img = loadImage ("./Images/enemigo2.png");

  astronautaImg = loadImage ("./Images/astronauta.png");

  extintorImg = loadImage ("./Images/extintor.png");


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
  imageMode(CORNER);
        image(finalImg, 0, 0, 1200, 700);

  switch (nivelActual) {
    case 0:
      
      if (crearAstronauta){
        astronauta = new Astronauta(50 + 100 * posIniX[nivelActual], 30 + 100 * posIniY[nivelActual], posIniY[nivelActual], posIniX[nivelActual]);
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

    enemigo1.show(enemigo1Img);
    enemigo1.move();

    extintor.pintarExtiontor(Ex,Ey);
    validarExtintor(4,3);
    validarEnemigo(enemigo1);
    validateImpact(enemigo1);
    fuego1.show();
    validarFuego(fuego1);
    validateApagarFuego(fuego1);

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

    

    enemigo2.show(enemigo1Img);
    enemigo3.show(enemigo2Img);
    enemigo4.show(enemigo2Img);
    enemigo2.move();
    enemigo3.move();
    enemigo4.move();

    validarEnemigo(enemigo2);
    validarEnemigo(enemigo3);
    validarEnemigo(enemigo4);
    validateImpact(enemigo2);
    validateImpact(enemigo3);
    validateImpact(enemigo4);
    
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
    validarProyectil(armas1Down);
    validarProyectil(armas1Up);
    validarProyectil(armas2Down);
    validarProyectil(armas3Down);
    validarProyectil(armas3Up);
    
    
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
    validarProyectil(armas4Down);
    validarProyectil(armas4Up);

    enemigo5.show(enemigo1Img);
    enemigo5.move();
    validarEnemigo(enemigo5);
    validateImpact(enemigo5);
    extintor.pintarExtiontor(Ex,Ey);
    extintor.recogerExtintor(2);
    fuego2.show();
    fuego3.show();
    fuego4.show();
    validarFuego(fuego2);
    validateApagarFuego(fuego2);
    validarFuego(fuego3);
    validateApagarFuego(fuego3);
    validarFuego(fuego4);
    validateApagarFuego(fuego4);

    break;

    case 5:
      imageMode(CORNER);
        image(inicioPan, 0, 0, 1200, 700);
      noFill ();
      noStroke ();
      rect(943,565,203,80);
      break;
  }

  if (nivelActual != 5) {
    astronauta.pintarAstronauta(Ax,Ay);
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
  if (astronauta.fila==filaGana && astronauta.col==colGana && deLlaves [nivelActual]) {
    if(nivelActual < 3) {
      astronauta.x = 50 + 100 * posIniX[nivelActual + 1]
      astronauta.col = posIniX[nivelActual + 1]
      astronauta.y = 30 + 100 * posIniY[nivelActual + 1]
      astronauta.fila = posIniY[nivelActual + 1]
    }
    nivelActual++;

  } else if (astronauta.fila==filaGana && astronauta.col==colGana){
      astronauta.x = 50 + 100 * posFinalX[nivelActual]
      astronauta.col = posFinalX[nivelActual ]
      astronauta.y = 30 + 100 * posFinalY[nivelActual]
      astronauta.fila = posFinalY[nivelActual]

  }
}

function antNiv(filaAnt,colAnt){
  if (astronauta.fila==filaAnt && astronauta.col==colAnt) {
    if(nivelActual >1 || nivelActual < 4) {
      astronauta.x = 50 + 100 * posFinalX[nivelActual - 1];
      astronauta.col = posFinalX[nivelActual - 1];
      astronauta.y = 30 + 100 * posFinalY[nivelActual - 1]
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

function validateImpact(enemigo){
  if (extintor.validarEspumita(enemigo)) {
    enemigo.eliminado=false;
    enemigo.y=1200;
  }
}
function validateApagarFuego(fuego){
  if (extintor.validarEspumita(fuego)) {
    fuego.eliminado=false;
    fuego.y=1200;
  }
}


function validarEnemigo(enemigo) {
  if (dist(astronauta.getX(), astronauta.getY(), enemigo.x, enemigo.y) < 50) {
      astronauta.x=posIniX[nivelActual]*100+50;
      astronauta.y=posIniY[nivelActual]*100+30;
      astronauta.fila=posIniY[nivelActual];
      astronauta.col=posIniX[nivelActual];
  }
}
function validarProyectil(arma) {

  if (arma.validarImpactoProyectil()) {
      astronauta.x=posIniX[nivelActual]*100+50;
      astronauta.y=posIniY[nivelActual]*100+30;
      astronauta.fila=posIniY[nivelActual];
      astronauta.col=posIniX[nivelActual];
  }
}

function validarFuego(fuego) {
  if (dist(astronauta.getX(), astronauta.getY(), fuego.x, fuego.y) < 50) {
      astronauta.x=posIniX[nivelActual]*100+50;
      astronauta.y=posIniY[nivelActual]*100+30;
      astronauta.fila=posIniY[nivelActual];
      astronauta.col=posIniX[nivelActual];
  }
}

function mousePressed() {

  if (mouseX >  943 && mouseX < 943+203 && mouseY > 565 && mouseY < 565+80 && nivelActual == 5){
    nivelActual=nivelActual-5;
    crearAstronauta = true;
  }
}