const engine = Matter.Engine
const mundo = Matter.World
const cuerpo = Matter.Bodies
var engine2;
var world;
var caja1;
var caja2;
var caja3;
var caja4;
var caja5;
var tronco1;
var tronco2;
var tronco3;
var tronco4;
var cerdito1, cerdito2;
var ave1;

function setup(){
    const canva = createCanvas(1200, 400);
    engine2 = engine.create()
    world = engine2.world
    caja1 = new box(700, 300, 50, 50)
    piso1 = new piso(600,390,1200,30)
    caja2 = new box(900, 300, 50, 50)
    caja3 = new box(700, 100, 50, 50)
    caja4 = new box(900, 100, 50, 50)
    caja5 = new box(800,50,50,50)
    tronco1 = new tronco(800,150,300,30,0)
    tronco2 = new tronco(800,50,300,30,0)
    tronco3 = new tronco(850,0,150,30,-15)
    tronco4 = new tronco(735,0,150,30,15)
    cerdito1 = new pig(800,350,25,25)
    cerdito2 = new pig(800,50,25,25)
    ave1 = new bird(100,380,25,25)
    
}

function draw(){
    background('green')
    engine.update(engine2)
    caja1.mostrar()
    piso1.mostrar()
    caja2.mostrar()
    caja3.mostrar()
    caja4.mostrar()
    caja5.mostrar()
    tronco1.mostrar()
    tronco2.mostrar()
    tronco3.mostrar()
    tronco4.mostrar()
    cerdito1.mostrar()
    cerdito2.mostrar()
    ave1.mostrar()

    


}

