const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage, monster1, monster2, superhero1, superhero2, sling;
var ground, block1;

function preload() {
//preload the images here
backgroundImage = loadImage("/GamingBackground.png");
monster1 = loadImage("/Monster-01.png");
monster2 = loadImage("/Monster-02.png");
superhero1 = loadImage("/Superhero-01.png");
superhero2 = loadImage("/Superhero-02.png");

}

function setup() {
  createCanvas(2000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 600, 1000, 50);
  superhero1 = new Hero(100, 600, 5);
  sling = new Fly(superhero1.body, {x:200,y:230});
  block1 = new Block(1000, 800, 50, 50);
  monster1 = new Monster(2000, 500, 5);
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  ground.display();
  superhero1.display();
  sling.display();
  block1.display();
  monster1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}