class Chain{

    constructor(bodya,bodyb){

        var options = {
            bodyA : bodya,
            bodyB : bodyb,
            stiffness : 1,
            length : 30
          }
        
        this.body = Constraint.create(options);
        World.add(world,this.body);

    }

    display(){
        strokeWeight(2);
        stroke("red"); 
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y);
    }

}