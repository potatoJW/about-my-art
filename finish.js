function drawFlash ( x,y) {
  //Body;
  fill(200,255,100);
  noStroke();
  arc(x,y+170,240,220,radians(180),radians(360) );
   //Neck
  fill(120,100,0);
  noStroke();
  quad(x-80,y,x+80,y,x+90,y+100,x-90,y+100);
  arc(x,y+100,180,40,radians(0),radians(180) );
   //Head 
  fill(255,232,203);
  stroke(120,100,0);
  strokeWeight(10);
  ellipse(x,y,150,140);
  //Eye
  stroke(10);
  strokeWeight(2);
  fill(250);
  ellipse(x-40,y-10,45,30);
  ellipse(x+40,y-10,45,30);
  
  fill(120,100,0);
  noStroke();
  arc(x-40,y-10,45,30,radians(180),radians(360) );
  arc(x+40,y-10,45,30,radians(180),radians(360) );
  
  fill(50);
  ellipse(x-40,y-2,12,12);
  ellipse(x+40,y-2,12,12);
  //Nose
  stroke(10);
  strokeWeight(2);
  line(x-15,y-45,x-20,y+30);
  line(x+15,y-45,x+20,y+30);

  fill(120,100,0);
  noStroke();
  arc( x,y+30,42,50,radians(180),radians(360) );
  arc( x,y+30,42,40,radians(0),radians(180) );
  //Mouth
  fill(200,0,0);
  noStroke();
  arc( x,y+40,30,15,radians(0),radians(180) );
    //Nosehole
  fill(50);
  ellipse(x-10,y+30,10,5);
  ellipse(x+10,y+30,10,5);
   //Eyebrow
  fill(255,232,203);
  stroke(25);
  strokeWeight(4);
  arc( x-20,y-30,75,30,radians(180),radians(275) );
  arc( x+20,y-30,75,30,radians(265),radians(360) );
}

function drawManbo( x,y,size){ 
/* x= x position
   y= y position
   size= size
   */
  strokeWeight(size*0.007);
  stroke(0);
 
  //ear
  fill(0,100,105);
  arc(x-size*0.2,y-size*0.6,size*0.3,size*0.24,radians(274.4),radians(339));
  arc(x+size*0.2,y-size*0.6,size*0.3,size*0.24,radians(201),radians(265.8));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(172.5),radians(210));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(330.5),radians(367.5));
 
  //arm
  ellipse(x,y+size*0.04,size*1.16,size*0.4);
  arc(x,y+size*0.2,size*1.22,size*1.15,radians(200),radians(340));
 
  //head
  stroke(0);
 ellipse(x,y-0.48*size,size*0.55,size*0.4);
//face
  noStroke();
  fill(255,245,220);
  ellipse(x, y-0.42*size,size*0.40,size*0.30);
  fill(0,100,105);
  arc(x,y-0.65*size,size*0.2,size*0.2,radians(20),radians(160));
 
  //eye
 strokeWeight(size*0.007);
 stroke(0);
 line(x-size*0.15,y-size*0.495,x-size*0.07,y-size*0.505);
 line(x+size*0.15,y-size*0.495,x+size*0.07,y-size*0.505);
 
 //tooth
 noFill();
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(189),radians(210));
 arc(x-size*0.102,y-0.45*size,size*0.13,size*0.1,radians(330),radians(350));
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(330),radians(351));
 arc(x+size*0.102,y-0.45*size,size*0.13,size*0.1,radians(190),radians(210));
 
 //mouse
 arc(x,y,size,size*0.92,radians(263),radians(277));
 
  //body
  stroke(0);
  fill(0,100,105);
ellipse(x,y-size*0.02, size*0.98,size*0.75);
  //Bae?
  strokeWeight(size*0.007);
  fill(255,245,220);
  arc(x,y, size,size*0.79,radians(224.5), radians(315.8));
  arc(x,y-size*0.353,size,size*0.9,radians(45),radians(138));
  arc(x-size*0.11,y-size*0.105,size*0.9,size*1.2,radians(335),radians(370));
  arc(x+size*0.105,y-size*0.105,size*0.9,size*1.2,radians(169),radians(205.5)); 
  fill(0,100,105);
  arc(x,y+0.15*size,size*0.5,size*0.25,radians(206),radians(338));
  noStroke();
  arc(x,y+0.15*size,size*0.5-size*0.007,size*0.25-size*0.007,radians(180),radians(360));
  ellipse(x,y+0.15*size,size*0.3,size*0.2);
 //foot 
  stroke(0);
  fill(255,245,220);
  ellipse(x-size*0.29,y+size*0.3,size*0.38,size*0.3);
  ellipse(x+size*0.29,y+size*0.3,size*0.38,size*0.3);
  fill(170,117,87);
  ellipse(x-size*0.29,y+size*0.3,size*0.18,size*0.13);
  ellipse(x+size*0.29,y+size*0.3,size*0.18,size*0.13);
  
  //lettering?
  strokeWeight(size*0.013);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.48);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.55);
  line(x-size*0.45,y-size*0.55,x-size*0.38,y-size*0.55);
  line(x-size*0.44,y-size*0.51,x-size*0.40,y-size*0.51);
  strokeWeight(size*0.01);
  line(x-size*0.4,y-size*0.44,x-size*0.35,y-size*0.46);
  line(x-size*0.35,y-size*0.46,x-size*0.37,y-size*0.4);
  line(x-size*0.37,y-size*0.4,x-size*0.33,y-size*0.42);
  line(x-size*0.38,y-size*0.43,x-size*0.34,y-size*0.44);
}

function drawHouse(x,y) {


  fill(255,150,0);
  rect(x+201,y+320,364,364);

  fill(108,176,24, 235); // skyblue
  rect(x+243, y+495, 69, 129);
  strokeWeight(3);
  line(x+243,y+495+62,x+243+69,y+495+62);
  line(x+243+33,y+495,x+243+33,y+495+126);
  
  fill(108,176,24, 235); // skyblue
  rect(x+458, y+495, 69, 129);
  strokeWeight(3);
  line(x+458,y+495+62,x+458+69,y+495+62);
  line(x+458+33,y+495,x+458+33,y+495+126);


  fill(108,176,24, 235); // skyblue
  rect(x+320,y+380,125,76);
  strokeWeight(3);
  line(x+320,y+380+40,x+320+124,y+380+40);
  line(x+320+63,y+380,x+320+63,y+380+74);


  fill(124,50,77); // brown
  rect(x+339,y+495,93, 186);
  fill(0);
  ellipse(x+339+22,y+495+95,20,20);


  fill(245,62,62); // red
  triangle(x+119, y+319, x+119+266,y+319-177, x+119+530,y+319+0);


  fill(137); // gray
  quad(x+213, y+256, x+213+70, y+256-46, x+213+70, y+256-150,x+213+0, y+256-150);
}

function drawCloud(x,y,z,w,k)
{
  noStroke();
  fill(k);
  ellipse(x,y,z,z);
  ellipse(x-w,y,0.8*z,0.8*z);
  ellipse(x+w,y,0.8*z,0.8*z);
}

function drawGirl( x, y, c1, c2, c3, z){
var i;
var from = color(c1,c2,c3);
var to = color(c1-20,c2-116,c3-65);
var interA;
var fromB = color(c1-14,c2-34,c3-34);
var toB = color(c1-24,c2-134,c3-74);
var interB;



for(i=0;i<=z-10;i++){
  interB = lerpColor(fromB,toB,.01*i);
  stroke(interB);
  line(x-55,i+y-10,x+55,i+y-10);
}


//body
stroke(234,208,145);
fill(234,208,145);
ellipse(x,y+45,80,40);


//legs
stroke(255,236,230);
fill(255,236,230);
rect(x-32,y+60,30,50);
rect(x+3,y+60,30,50);

//shoes
stroke(87,91,93);
fill(87,91,93);
rect(x-32,y+100,30,10);
rect(x+3,y+100,30,10);

//skirts
stroke(135,135,135);
fill(135,135,135);
rect(x-35,y+50,70,25);

stroke(234,208,145);
fill(234,208,145);
rect(x-40,y+25,80,30);
ellipse(x,y+35,65,60);

stroke(255);
fill(255);
ellipse(x-28,y+30,40,40);
ellipse(x+28,y+30,40,40);


//shirts
stroke(245);
fill(245);
triangle(x,y+30,x-20,y,x+20,y);

stroke(242,196,186);
fill(242,196,186);
ellipse(x,y+5,20,15);

stroke(255);
fill(255);
triangle(x,y+15,x-15,y+25,x-15,y);
triangle(x,y+15,x+15,y+25,x+15,y);

stroke(196,71,61);
fill(196,71,61);
triangle(x-2,y+16,x-8,y+55,x-12,y+52);
triangle(x+2,y+16,x+8,y+55,x+12,y+52);
triangle(x,y+15,x-17,y+23,x-6,y+25);
triangle(x,y+15,x+17,y+23,x+6,y+25);
rect(x-2,y+15,3,5);
//hand
stroke(255,236,230);
fill(255,236,230);
ellipse(x-25,y+23,35,30);
ellipse(x+25,y+23,35,30);

//hair1
stroke(from);
fill(from);
ellipse(x,y-60,150,130);
rect(x-75,y-60,150,50);

for(i=0;i<=z;i++){
  interA = lerpColor(from,to,.01*i);
  stroke(interA);
  line(7*sin(0.08*i-1.3)+x-68,i+y-10,7*sin(0.08*i-0.5)+x-40,i+y-10);
  line(-7*sin(0.08*i-0.5)+x+40,i+y-10,-7*sin(0.08*i-1.3)+x+68,i+y-10);
}

//head
stroke(255,243,239);
fill(255,243,239);
ellipse(x,y-35,97,80);
ellipse(x,y-14,100,45);

//hair2
stroke(from);
fill(from);
arc(x-42,y-70,50,70,-QUARTER_PI,HALF_PI+QUARTER_PI);
arc(x-17,y-80,70,70,-QUARTER_PI-HALF_PI,HALF_PI);
arc(x+40,y-70,50,70,QUARTER_PI,QUARTER_PI+PI);

//chick
stroke(246,215,214);
fill(246,215,214);
ellipse(x-35,y-14,29,25);
ellipse(x+36,y-14,29,25);

//left eye
stroke(117,77,54);
fill(117,77,54);
ellipse(x-30,y-30,30,25);
arc(x-50,y-32,20,15,-QUARTER_PI,HALF_PI+QUARTER_PI);
stroke(255);
fill(255);
ellipse(x-28,y-26,26,20);

stroke(c1-67,c2-7,c3+54);
fill(c1-67,c2-7,c3+54);
ellipse(x-25,y-26,20,20);

//right eye
stroke(117,77,54);
fill(117,77,54);
ellipse(x+30,y-30,30,25);
arc(x+50,y-32,20,15,QUARTER_PI,PI+QUARTER_PI);

stroke(255);
fill(255);
ellipse(x+29,y-26,26,20);

stroke(c1-67,c2-7,c3+54);
fill(c1-67,c2-7,c3+54);
ellipse(x+25,y-26,20,20);

//pupils
stroke(c1-130,c2+60,c3+6);
fill(c1-130,c2+60,c3+6);
ellipse(x+25,y-28,18,15);
ellipse(x-25,y-28,18,15);

stroke(c1-124,c2-102,c3-36);
fill(c1-124,c2-102,c3-36);
ellipse(x+25,y-26,10,13);
ellipse(x-25,y-26,10,13);

stroke(0,70);
fill(0,70);
ellipse(x+29,y-33,25,20);
ellipse(x-28,y-33,25,20);

//lights
stroke(255);
fill(255);
ellipse(x+22,y-31,8,5);
ellipse(x-29,y-31,8,5);
//eyebrow
stroke(c1-56,c2-67,c3-67);
fill(c1-56,c2-67,c3-67);
ellipse(x+25,y-55,25,7);
ellipse(x-27,y-55,25,7);

//mouth
stroke(249,126,118);
fill(249,126,118);
ellipse(x,y-5,10,5);
}


function setup() {
  scale(0.6);
createCanvas(1000, 1000);
background(147,191,247);
  fill(72,193,136);
  ellipse(500,1000,1000,200);
  
  drawFlash(100,830);
  drawGirl(800,900,164,150,255,150);
  
  drawCloud(100,100,100,50,255);
  drawCloud(300,220,100,50,255);
  drawCloud(800,100,100,50,255);
  
  drawHouse(60,290);
  drawManbo(520,540,200);
}
