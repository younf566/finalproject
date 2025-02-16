
let myFont;
const ourWord = "MOO";
let pointArray;
// I am not sure if this is the correct way to link it. I've tried every combination. The nfont is in the projects folder becausze the error told me to put it inside of that
function preload() {
    myFont = loadFont("ComicSansMS.ttf");
    
}

function setup() {
    createCanvas(400, 200).parent('my-sketch1');
    background(0); 
    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {
        sampleFactor: 0.25
    });

    fill(255, 0, 0); 
    noStroke();

    for (let i = 0; i < pointArray.length; i++) {
        let point = pointArray[i];  
        ellipse(point.x, point.y, 5); 
    }
}

function draw() {
 
}
