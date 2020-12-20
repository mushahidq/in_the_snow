let board;
let bimage;
let bgimage;
let fgimage;
let sm1image;
let sm2image;
let snowmen = [];
let startScreen = true;
let loss = false;
var uptownColor;
var inc = 0;
var score = 0;
var highScore = 0;

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
  uptownColor=color(60,100,85);
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
  if(startScreen){
    if(loss){
      for (let s of snowmen) {
        s.show();
      }
      fill(60,100,85);
      textSize(34);
      text("SCORE: " + score ,260,220);
      if (score > highScore) {
        highScore = score;
      }
    }
    fill(uptownColor);
    textSize(48);
    text("CLICK TO START",152,152);
    fill(60,100,85);
    textSize(34);
    text("HIGH SCORE: " + highScore ,220,185);
    if(mouseIsPressed){
      uptownColor=color(300,80,90);
      startScreen = false;
      snowmen = []
    }
    else{
      uptownColor=color(60,100,85);
    }

  }
  if (!startScreen) {
    if (random(1) < 0.005) {
      snowmen.push(new Snowman());
    }

    for (let s of snowmen) {
      s.move();
      s.show();
      if (board.hits(s)) {
        console.log('game over');
        startScreen = true;
        loss = true;
      }
    }
    fill(60,100,85);
    textSize(26);
    text("SCORE: " + score ,600,50);
    board.move();
    if (inc == 20) {
      score += 1;
      inc = 0;
    }
    else {
      inc += 1;
    }
  }
}
