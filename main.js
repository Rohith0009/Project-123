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
  }
}