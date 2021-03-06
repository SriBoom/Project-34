class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB
        this.flysling = Constraint.create(options);
        World.add(world, this.flysling);
    }
    attach(body){
        this.flysling.bodyA = body;
    }
    
    fly(){
        this.flysling.bodyA = null;
    }

    display(){
        if(this.flysling.bodyA){
            var pointA = this.flysling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            strokeWeight(0);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            pop();
        }
    }
    
}