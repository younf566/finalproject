
let size5 = 5;
function preload() {
    myFont5 = loadFont("ComicSansMS.ttf"); 
}

function setup() {
    createCanvas(400, 200).parent ('my-sketch');
    background(0); 
    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {
        sampleFactor: 0.2});
    noStroke();
    rectMode(CENTER);
    for (let i = 0; i < pointArray.length; i++) {
        if(i%2 == 1){

            square(pointArray[i].x, pointArray[i].y, size5);
            fill(255, 0, 0);

        } else{
        
            ellipse(pointArray[i].x, pointArray[i].y, size5);
            fill(255);
        }
}
}
function draw() {
 
}
