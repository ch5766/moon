var bg, img;

function setup() 
{
   createCanvas(1000,1000);
   bg = loadImage("galaxy.jpg");
   img = loadImage("earth.jpg");
}

function draw() 
{
   background(bg);
   noStroke();
   fill(255,139,0);
   ellipse(500,500,150,150);

   //earth
   var duration = 3000;
   var timing = (new Date()%duration)/duration;

   image(img, 500 + Math.cos(timing*2*PI)*200,           // x좌표
        500 + Math.sin(timing*2*PI)*200, // y좌표
        100,                                  // width
        100);            

   //moon
   var duration = 1000;
   var timing2 = (new Date()%duration)/duration;

   fill(255,206,0);
   ellipse(500 + Math.cos(timing*2*PI)*200+ Math.cos(timing2*2*PI)*70,           // x좌표
        500 + Math.sin(timing*2*PI)*200+ Math.cos(timing2*2*PI)*70, // y좌표
        30,                                  // width
        30);   
                                      // height

   //star
    var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fill(65,77,181);
   ellipse(500 + Math.cos(timing*2*PI)*300+ Math.cos(timing*2*PI)*100,           // x좌표
        500 + Math.sin(timing*2*PI)*300+ Math.cos(timing*2*PI)*100, // y좌표
        60,                                  // width
        60);                                  
}
