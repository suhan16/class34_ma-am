class Ground 
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:false
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.image = loadImage("pictures/flooded.jpg")
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    imageMode(CENTER);
    noStroke();
    fill(148,127,146);
    image(this.image,pos.x,pos.y, this.w, this.h);
    pop();
  }
}