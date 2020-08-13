class Drops{
    constructor(x,y,radius){
        var drops_options={
            restitution:0.8,
            friction:0.8
        }
        this.body=Bodies.circle(x,y,radius,drops_options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        fill("blue");
        var place=this.body.position;
        ellipseMode(RADIUS);
        ellipse(place.x,place.y,this.radius);
    }
}