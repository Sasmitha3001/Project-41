class Thunder{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.image=loadImage("Sprites/Thunder.jpg");
        World.add(world,this.body);
    }

    display(){
        var place=this.body.position;
        imageMode(CENTER);
        image(this.image,place.x,place.y,this.width,this.height);

    }

}