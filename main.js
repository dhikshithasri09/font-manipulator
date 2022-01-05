leftWristX = "";
rightWristX = "";
difference = "";

function setup(){
    canvas = createCanvas(450,400);
    canvas.position(560,100);
    
    video = createCapture(VIDEO);
    video.size(450,400);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Pose Net is Initialised !");
}

function draw(){
    background('#ADD8E6');
    textSize(difference);
    fill('#000000');
    text('Hola !',100,250);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left_wrist_x" + leftWristX + " , Right_wrist_x" + rightWristX + " , difference" + difference);
    }
}