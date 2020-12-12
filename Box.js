class Box{
    constructor(x, y, width, height){

        var properites = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, properites);

        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }

    display(){
        var boxPos = this.body.position;

        push();
        
        translate(boxPos.x, boxPos.y);

        rectMode(CENTER);

        fill("grey");
        rect(0, 0, this.width, this.height);

        pop();
    }
}