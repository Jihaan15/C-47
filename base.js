class Base{
    constructor(x,y,width,height){
  var options = {
      isStatic : true
  }
  this.image = loadImage("block3.png")
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.heig
World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}