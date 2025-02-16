
function preload() {
    myFont3 = loadFont("ComicSansMS.ttf"); 
}// i had a hard time

function setup() {
    createCanvas(400, 200).parent ('my-sketch');
    background(0); 
    pointArray = myFont3.textToPoints(ourWord, 20, 150, 135, {
        sampleFactor: 0.2});

    fill(255, 0, 0); 
    noStroke();
    for (let i = 0; i < pointArray.length; i++) {
         if (pointArray[i].x>200){
             fill(255, 0, 0)
         } else{
             fill(0, 255, 217);
         }
         ellipse(pointArray[i].x, pointArray[i].y, 5);
 
 
    }
}

function draw() {
 
}
