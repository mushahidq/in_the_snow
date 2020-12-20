let board;
let bimage;
let bgimage;
let fgimage;
let sm1image;
let sm2image;
let snowmen = [];
let startScreen = true;

function preload() {
  bimage = loadImage('board.png');
  bgimage = loadImage('bg.png');
  fgimage = loadImage('fg.png');
  sm1image = loadImage('sm1.png');
  sm2image = loadImage('sn2.png');
}

function setup() {
  createCanvas(800, 450);
  board = new Board();
}

function keyPressed() {
  if (key == ' ') {
    board.jump();
  }
}

function draw() {
  background(bgimage);
  image(fgimage, 0, -50, 800, 500);
  board.show();
  if (!startScreen) {
    if (random(1) < 0.005) {
      snowmen.push(new Snowman());
    }

    for (let s of snowmen) {
      s.move();
      s.show();
      if (board.hits(s)) {
        console.log('game over');
        noLoop();
      }
    }

    board.move();
  }
}
