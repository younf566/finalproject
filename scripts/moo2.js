
function preload() {
    myFont2 = loadFont("ComicSansMS.ttf"); 
}

function setup() {
    createCanvas(400, 200).parent ('my-sketch');
    background(0);
    myFont2.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.2});
    noStroke();
      fill(255, 0, 0);
      for (let i = 0; i < pointArray.length; i++) {
        let r = map(i, 0, pointArray.length, 255, 50);
        let g = 0;
        let b = 0;
        fill(r, g, b);
        ellipse(pointArray[i].x, pointArray[i].y, 5);
}
}

function draw() {

}
