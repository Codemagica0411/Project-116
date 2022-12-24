noseX = 0;
noseY = 0;


function preload() {
    mustache = loadImage('https://i.postimg.cc/50DxKD6n/m.png');
}


function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(400, 250);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    tint_color=""
}
function modelLoaded() {
    console.log("PoseNet is Initialized");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y+15;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
       
    }
   
}
function draw() {
    image(video, 0, 0, 640, 480);
    image(mustache,noseX,noseY,30,30);

    
}

function take_snapshot() {
    save('student_name.png')
}

