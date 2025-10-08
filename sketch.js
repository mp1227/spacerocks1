var apples=0;
var oranges=255;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(50,125,168); //an RGB color for the canvas' background 
  stroke(0,0,0); // an RGB color for the circle's border
  fill(mouseX, mouseY, oranges); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,100,100); // center of canvas, 20px dia
  textSize(50);
  textFont('Impact');
  text("city house",100,50);
    stroke(64,64,64);
    fill(64,64,64);
    rect(350,300,30,200);  
    rect(420,300,30,200);
    rect(350,275,100,100);
    rect(350,425,100,100);

    rect(230,300,30,200); // X,Y,H,W
    rect(300,300,30,200);
    rect(230,275,200,100);
    rect(230,425,200,100);
    rect(130,300,30,200); 
    rect(200,300,30,200);
    rect(130,275,200,100);
    rect(130,425,200,100);

    rect(230,75,30,200); // X,Y,H,W
    rect(300,75,30,200);
    rect(230,75,200,100);
    rect(130,75,30,200); 
    rect(200,75,30,200);
    rect(130,75,200,100);
    rect(400,75,30,200);
        rect(0,0,apples,apples);
        

}

function mousePressed(){
if (apples>=255) {
  apples=0;
} else {
  apples=apples+5;
}
if (oranges>=255) {
  oranges=0;
} else {
  oranges=oranges+5;
}

}
