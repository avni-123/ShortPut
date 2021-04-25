class Ground{

        constructor(x, y, width, height){
    
            var options = {
    
                isStatic : true
    
            }
    
            this.body = Bodies.rectangle(x, y, width, height, options);
    
            this.width = width;
    
            this.height = height;

            this.image = loadImage("ground.png");
    
            World.add(world, this.body);
    
        }
    
        display(){
    
            var A = this.body.position;
    
            push();
    
            imageMode(CENTER);
    
            fill("brown");
    
            image(this.image, A.x, A.y, this.width, this.height);
    
            pop();
            
        }
    }
 