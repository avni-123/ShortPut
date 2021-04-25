class SlingShot{

    constructor(bodyA, pointB){

        var options = {

            bodyA : bodyA,

            pointB : pointB,

            stiffness : 0.04,

            length : 1

        }

        this.pointB = pointB;

        this.rope = Matter.Constraint.create(options);

        World.add(world, this.rope);
        
    }

    ballattach(body){

        this.rope.bodyA = body;

    }

    fly(){

        this.rope.bodyA = null;

    }

    display(){

        if(this.rope.bodyA){

        var bodyA = this.rope.bodyA.position;

        var pointB = this.pointB;

        push();

        stroke("gold");
        
        strokeWeight(4);

        line(pointB.x, pointB.y, bodyA.x, bodyA.y);

        pop();

        }

    }
    
}
