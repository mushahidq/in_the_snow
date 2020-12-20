class Board {
  constructor() {
    this.rx = 330;
    this.ry = 200;
    this.x = -50;
    this.y = 150;
    this.vy = 0;
    this.gravity = 0.7;
  }
  hits(snowman) {
    return collideRectRect(this.x, this.y, this.rx, this.ry, snowman.x-100, snowman.y+100, snowman.r, snowman.r) 
  }
  jump() {
    if(this.y == 150){
      this.vy = -15;
    }
  }
  
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, -30, 150);
  }
  
  show() {
    image(bimage, this.x, this.y, this.rx, this.ry);
  }
}
