let feed;
let Brightness = [];
let downsize = 10;
let holepuncharray = [];

// class circles {
//   constructor(x, y, r) {
//       this.x = random(10, 500);
//       this.y = random(10, 500);
//       this.r = random (1, 45)
//           } 

//           movement(){
//     this.x = this.x - random (1, -1);
//     this.y = this.y - random (1, -1.1);
//   };
// show(){ 
  
//     fill(random(0,255));
//     circle(this.x, this.y, this.r);
//     }

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  feed = createCapture(VIDEO);
  feed.size(width/downsize, height/downsize);
  feed.hide();

}

function draw() {
  background(0);


  feed.loadPixels();
  loadPixels();
  for (let x = 0; x < feed.height; x++) {
    for (let y = 0; y < feed.width; y++) {
       let index = (x + y * feed.width) * 4;
      r = feed.pixels[index + 0];
      g = feed.pixels[index + 2];
      b = feed.pixels[index + 3];
     var bright = (r+g+b)/3
   
      fill(bright, 200);
      rectMode(CENTER);
      var w = map(bright, 0, 255, bright, downsize);
     ellipse(x*downsize, y*downsize, w, );

  }
     
    }
  feed.updatePixels();

};


