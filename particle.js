class particle {
    constructor (x,y){
    var options={
    isStatic: false,
    friction:1,
    restitution:0.1,
    density:0.1
    
    
    }
    this.body = Bodies.circle(x,y,10,options)
    this.radius=10
    this.color=color(random(200,255),random(0,255),random(0,255))
    
    World.add(world,this.body)
    }
    display(){
        push()
    translate(this.body.position.x,this.body.position.y)   
    fill(this.color) 
   ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)
    pop()
    
    
    
    
    }
    }







