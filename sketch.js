const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage, monster1, monster2, superhero1, superhero2, sling;
var ground;

function preload() {
//preload the images here
backgroundImage = loadImage("/images/GamingBackground.png");
monster1 = loadImage("/images/Monster-01.png");
monster2 = loadImage("/images/Monster-02.png");
superhero1 = loadImage("/images/Superhero-01.png");
superhero2 = loadImage("/images/Superhero-02.png");

}

function setup() {
  createCanvas(2000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 600, 1000, 50);
  superhero1 = new Hero(100, 600, 5);
  sling = new Fly(superhero1.body, {x:200,y:230});
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  ground.display();
  superhero1.display();
  sling.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}