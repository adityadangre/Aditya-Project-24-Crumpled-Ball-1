class Paper{
    constructor(x,y){
        var option={
            isStatic:false,
            restitution:0.8,
            friction:0.3,
            density:1.2
        }
    this.body=Bodies.circle(x,y,20,option);
    this.width=width;
    this.height=height;

    World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        stroke("black")
        strokeWeight(5);
        fill("white");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}