
function preload() {
    myFont = loadFont("ComicSansMS.ttf"); 
}

function setup() {
    createCanvas(400, 200).parent('my-sketch');
    pointArray = 
        myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.2});
    fill(255, 0, 0);
    noStroke();
  
    console.log(pointArray.length);
}
//followed along from in class
function draw() {

    background(0); 

    for(let i = 0; i < pointArray.length; i++) {
        // circle(pointArray[i].x, pointArray[i].y, 5); 

        const xPos = pointArray[i].x;
        const yPos = pointArray[i].y;

        const distance =
            dist(mouseX, mouseY, xPos, yPos);
        let pointSize = map(distance, 0, 100, 50, 5, true);

        circle(xPos, yPos, pointSize); 
    }
}

