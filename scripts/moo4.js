let size = 5;

function preload() {
    myFont4 = loadFont("ComicSansMS.ttf"); 
}

function setup() {
    createCanvas(400, 200).parent ('my-sketch');
    background(0); 
    pointArray = myFont4.textToPoints(ourWord, 20, 150, 135, {
        sampleFactor: 0.2});

    for (let i = 0; i < pointArray.length; i++) {
        if (pointArray[i].x>200){
            fill(255, 0, 0)
        } else{
            fill(0, 255, 217);
        }
        size = map(pointArray[i].y, 0, 200, 0, 10);
        ellipse(pointArray[i].x, pointArray[i].y, size);
        
    }
}

function draw() {
 
}
