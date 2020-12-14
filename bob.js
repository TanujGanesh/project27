class Bob{
    constructor(x,y,rd){
        var opt={
           isStatic:false, 
           restitution:1,
           friction:0,
           density:0.8
        }
        
        this.rd = rd;
        this.body = Bodies.circle(x,y,rd/2,opt);
        World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        push();
        fill("pink");
        noStroke();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.rd,this.rd);
        //circle(0,0,this.rd);
        pop();
    }
}