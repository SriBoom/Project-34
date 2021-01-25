class Hero{
    constructor(x, y, r) 
    {
        var options = {
            density:1.0,
            frictionAir: 1
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("/Superhero-01.png");
        this.body = Bodies.rectangle(this.x, this.y, this.r, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 200, 200, 200, 100);
        pop();
      }
}