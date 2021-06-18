class Paper1 {
    constructor (x,y,w,h){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:0.1

        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.image = loadImage("paper.png")
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }

    display(){
       imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
    }
}