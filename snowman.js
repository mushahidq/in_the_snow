class Snowman{
  
  constructor() {
    this.r = 70;
    this.x = width;
    this.y = 430;
  }
  
  move() {
    this.x -= 6;
    this.y -= 1.5;
  }
  
  show() {
    image(sm1image, this.x, this.y, this.r, this.r);
  }
}
