class Plinko{
    constructor(x,y){
        var options={
         isStatic: true,
            restitution : 1,
            friction : 1.5,
            density: 1.2,

        }
        this.body = Bodies.circle(x,y, 15, options );
this.radius = 15;
        World.add(world,this.body);
        console.log(this.body.position.x);
    }
    display(){
      
      push();
      var pos = this.body.position;
       translate(pos.x,pos.y);
     
        fill("pink");
        ellipseMode(CENTER);
      ellipse(pos.x,pos.y,20);
        pop();
      }

    
       

    };