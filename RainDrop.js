class RainDrops{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.velocityY  = random(2,5);
        this.color=color(random(30,200), random(30,200), random(100,255));
        World.add(world, this.body);
    }
     fall(speed){
        this.y +=speed;
    }
  
    display(){
        
        push();
        colorMode(RGB);
        noStroke();
       
        fill(this.color);
        ellipse(this.x, this.y, this.radius);
        pop();
    }
  }