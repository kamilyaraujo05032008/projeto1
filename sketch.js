let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y
let posicaoHorizontal2; // x
let posicaoVertical2; // y
function setup() {
  createCanvas(500, 500);
   background(color(10,0,0));
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
circle(posicaoHorizontal2, posicaoVertical2, 50);
  
posicaoHorizontal+= random(0, 3);
posicaoVertical+= random(-3, 3);
  
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
    
}