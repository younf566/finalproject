let myFont;
const ourWord = "MOO";
let pointArray;

function preload() {
    myFont = loadFont("ComicSansMS.ttf"); 
}

function setup() {
    createCanvas(400, 200).parent ('my-sketch');
    background(0); 
    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {
        sampleFactor: 0.25, 
        simplifyThreshold: 0
    });

    fill(255, 0, 0); 
    noStroke();

    for (let i = 0; i < pointArray.length; i++) {
        let point = pointArray[i];  
        circle(point.x, point.y, 5); 
    }
}

function draw() {
 
}
