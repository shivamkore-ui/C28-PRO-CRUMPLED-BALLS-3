class Dustbin {
    constructor (x,y,width,height){
             this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png")

    }

    display(){
     image(this.image, 475,585,100, 100)
    }
}