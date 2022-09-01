function setup() {
  canvas = createCanvas(550, 550);
  canvas.position(500, 300);
  video = createCapture(VIDEO);
  video.size(500, 500);
  pose_net = ml5.poseNet(video, modelloaded);
  pose_net.on("pose", gotposes);
  canvas = createCanvas(550, 550);
  canvas.position(500, 140);
}

function modelloaded() {
  console.log("Pose Net Is Loaded.");
}

function gotposes(results) {
  if (results.length > 0) {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
  }
}

function draw(){
  background('#6C91C2')

  textsize(difference);
  fill('#FFEE787');
  text('Rohith M', 50, 400)
}