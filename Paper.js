class Paper{
    constructor(x, y,radius){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:24
}

this.body = Bodies.circle(x, y, radius, options);
World.add(world, this.body);
}
display(){
fill("yellow");

ellipseMode(CENTER);
ellipse(this.body.position.x,this.body.position.y,this.body.radius);
}
}
