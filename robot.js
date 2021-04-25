class Robot{

        constructor(x, y, width, height){
    
            var options = {
    
                isStatic : true
    
            }
    
            this.body = Bodies.rectangle(x, y, width, height, options);
    
            this.width = width;
    
            this.height = height;
    
            this.image = loadImage("R1.png");
    
            World.add(world, this.body);
    
        }
    
        display(){
    
            var r = this.body.position;
    
            push();
    
            imageMode(CENTER);
    
            fill(230, 20, 70);
    
            strokeWeight(1.5);
    
            stroke("gold");
    
            image(this.image, r.x, r.y, this.width, this.height);
            
            pop();
            
        }
    }
