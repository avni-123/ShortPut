class Ball{

        constructor(x, y, radius, maxSides){
    
            var options = {
    
                isStatic : true
    
            }
    
            this.body = Bodies.circle(x, y, radius, options, maxSides);
    
            this.radius = radius;
    
            this.maxSides = maxSides;
    
            this.image = loadImage("spball.png");
    
            World.add(world, this.body);
    
        }
    
        display(){
    
            var s = this.body.position;
    
            push();
    
            imageMode(RADIUS);
    
            fill(250, 50, 200);
    
            strokeWeight(4);
    
            stroke("purple");
    
            image(this.image, s.x, s.y, this.radius, this.maxSides);
    
            pop();
    
        }
    
    }
