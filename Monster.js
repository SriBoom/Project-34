class Monster{
    constructor(x, y, r) 
    {
        var options = {
            density:1.0,
            frictionAir: 1
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("/Monster-01.png");
        this.body = Bodies.rectangle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 1000, 300, 200, 200);
        pop();
      }
}