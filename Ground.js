class Ground {    
    constructor (x,y,w,h){
    var options = {
        isStatic: true,
        restitution: 0.3
    }
    this.body = Bodies.rectangle(x,y,w,h,options)
 
    World.add(world, this.body)
}

display(){
    rect(this.body.position.x, this.body.position.y, 800, 15)
}
}


