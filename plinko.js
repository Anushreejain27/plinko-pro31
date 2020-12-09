class plinko {
    constructor (x,y){
    var options={
    isStatic: true,
    density:10
    
    
    }
    this.body = Bodies.circle(x,y,11,options)
    this.radius=11
    
    World.add(world,this.body)
    }
    display(){
        push()
    translate(this.body.position.x,this.body.position.y)   
    fill("WHITE") 
   ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)
    pop()
    
    
    
    
    }
    }


















