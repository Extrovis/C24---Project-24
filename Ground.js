class Ground{
    constructor(x, y){
        var properties = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 800, 30, properties);

        World.add(world, this.body);
    }

    display(){

        var groundPos = this.body.position;

        push();

        translate(groundPos.x, groundPos.y);

        rectMode(CENTER);
        
        fill("green");
        rect(0, 0, 800, 30);

        pop();
    }
}