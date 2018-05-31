// Arrays for the X and Y positions of the Aliens
var sphereCoordsX = [0, 0, 0, 0, 0];
var sphereCoordsY = [0, 0, 0, 0, 0];
var yodel;
var walmart;
var daddy;
// Other variables
var sphereDia = 25,
  speed = 2,
  score = 0;
var end = false,
  shoot = false;
var counter = 0

function preload() {
  yodel = loadImage("yodel_kid.png");
  walmart = loadImage("Walmart.jpg");
  daddy = loadSound("daddy.mp3");
  logo = loadImage("logo.png");
}

function setup() {
  // Create an area that is not the full screen
  createCanvas(600, 620);
  frameRate(60)

  // set the x position of each alien randomly
  for (var i = 0; i < 5; i++) {
    sphereCoordsX[i] = random(20, width - 20);
    // The variable width is the width of the Canvas
    // We would use height for the height of the Canvas
  }
  textSize(40);
  // Setting this for the size the score will be displayed at
}

function draw() {
  image(walmart, 0, 0, 600, 620);
  drawSpheres();
  moveSpheres();
  drawShip();
  if (shoot) {
    checkShoot();
  }
  endCheck();
  if (end) {
    background(0);
    fill(255, 0, 0);
    text("Game Over", width / 2 - 80, height / 2);
  }

  // Write a line to Display the Score
  fill(255, 0, 0);
  textSize(40);
  text("SCORE", 200, 50);
  text(score, 260, 100);
  // near the top, cenetered would be best
}

function drawSpheres() {
  fill(0, 255, 0);
  for (var i = 0; i < 5; i++)
    image(logo, sphereCoordsX[i] - 15, sphereCoordsY[i] - 15, 30, 30)
  // Set the color of the Aliens
  // Draw each of the aliens
  // you should use a loop here.
}

function moveSpheres() {
  for (var i = 0; i < 5; i++) {
    sphereCoordsY[i] = sphereCoordsY[i] + speed
  }
  // Move Spheres down the screen,
  // i.e. change sphereCoordsY
}

function drawShip() {
    image(yodel, mouseX-20, 510, 50, 150);
  // Draw the ship so that it follows the mouse left to right
  // but stays the same distance from the botom of the screen

}

function checkShoot() {
  strokeWeight(5);
  stroke(255, 0, 0);
  fill(255, 0, 0);
  line(mouseX, 20, mouseX, height);
  for (var i = 0; i < 5; i++)
    if (sphereCoordsX[i] > mouseX - 10 && sphereCoordsX[i] < mouseX + 10) {
      sphereCoordsY[i] = 0
      sphereCoordsX[i] = random(20, width - 20);
      score = score + 10
     console.log("play!");
     daddy.play();



  }
//      counter = counter + 1
//    }
//  while (counter < 20 && counter > 10) {
//    speed = 2
//    while (counter < 30) {
//      speed = 3
//    }



    // Check to see if you hit
    // Use a loop to see if any of the aliens was hit.
    // Probably some sort of If like checking if your
    // padle hit your ball in last challenge.
    // If you hit, you should probably increase the score

    shoot = false;
    strokeWeight(1);
  }

  function mousePressed() {

    shoot = true;
  }

  function endCheck() {
    for (var i = 0; i < 5; i++)
      if (sphereCoordsY[i] == 620) {
        background(20);
        score = 0;
        noLoop()
        fill(255, 0, 0);
        text('you', 200, 200);
        text('lose', 200, 240);
        text('big', 200, 280);
        text('time', 200, 320);
      }
    // Check to see if any of the Aliens made it past the ship
    // You'll probably need some sort of loop here
  }
