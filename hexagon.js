class Shot {

    constructor(x, y,radius) {
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':0.3,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,options)  
        this.image = loadImage("polygon1.png");    
        World.add(world, this.body);
        
      }
     display(){
      var pos = this.body.position
       imageMode(CENTER)
       fill ("cyan");
       image(this.image,pos.x,pos.y,50,50);


     }

  }