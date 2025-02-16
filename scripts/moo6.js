

function preload() {
    myFont = loadFont("ComicSansMS.ttf"); 
}

function setup() {
    createCanvas(400, 200).parent('my-sketch');
    background(0); 
    pointArray = 
    myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.2});
    noStroke();
}

function draw() {
    clear();  
    background(0); 
    let amplitude = 7; 
    let frequency = 0.04;
    for (let i = 0; i < pointArray.length; i++) {
        let waveOffset = sin(frameCount * frequency + pointArray[i].x * 0.05) * amplitude;
        ellipse(pointArray[i].x, pointArray[i].y + waveOffset, 5);

}
}
    
