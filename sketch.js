var bg, img1, img2, img3;

function setup() 
{
   createCanvas(1000,1000);
   bg = loadImage("galaxy.jpg");
   img1 = loadImage("earth.png");
   img2 = loadImage("moon.png");
   img3 = loadImage("sun.png");
   img4 = loadImage("ura.png");
}

function draw() 
{
   background(bg);
   noStroke();
   image(img3,500-img3.width/2,500-img3.height/2,150,150);

   //earth
   var duration = 3000;
   var timing = (new Date()%duration)/duration;

   image(img1, 500-img1.width/2 + Math.cos(timing*2*PI)*200,           // x좌표
        500-img1.height/2 + Math.sin(timing*2*PI)*200, // y좌표
        100,                                  // width
        100);            

   //moon
   var duration = 1000;
   var timing2 = (new Date()%duration)/duration;

   image(img2, 500-img2.width/2 + Math.cos(timing*2*PI)*200+ Math.cos(timing2*2*PI)*70,           // x좌표
        500-img2.height/2 + Math.sin(timing*2*PI)*200+ Math.cos(timing2*2*PI)*70, // y좌표
        30,                                  // width
        30);   
                                      // height

   //ura
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fill(65,77,181);
   image(img4-img4.width/2, 500 + Math.cos(timing*2*PI)*300+ Math.cos(timing*2*PI)*100,           // x좌표
        500-img4.height/2 + Math.sin(timing*2*PI)*300+ Math.cos(timing*2*PI)*100, // y좌표
        60,                                  // width
        60);                                  
}
