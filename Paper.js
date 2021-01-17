class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius = radius
        this.body = Bodies.circle(100,540,20,options);
        this.width = 30;
        this.paperimg = loadImage("Images/paper.png");
        World.add(world, this.body);

    }

    display(){
        var position = this.body.position;
        fill("white");
        imageMode(RADIUS);
        image(this.paperimg, position.x, position.y, 30,30);
        this.paperimg.scale = 3;
    }
}