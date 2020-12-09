class line{
constructor (x,y,w,h){
var options={
isStatic: true,
density:10


}
this.body = Bodies.rectangle(x,y,w,h,options)
this.width=w
this.height=h
World.add(world,this.body)
}
display(){
    push()
translate(this.body.position.x,this.body.position.y)   
fill("cyan") 
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()




}









}