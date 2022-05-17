song = ""
leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
scoreLeftWrist = ""
scoreRightWrist=""

function preload(){
    song = loadSound('giorno theme.mp3')
} 

function setup(){
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}



function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
        scoreLeftWrist = results[0].pose.keypoints[9].score
        console.log("ScoreLeftWrist = " = scoreLeftWrist)
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist" + scoreLeftWrist)

        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y 
        console.log("leftWristX" + leftWristX +"leftWristY" + leftWristY)

        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("rightWrist" + rightWristX + "rightWristY" + rightWristY)

    }
}

function setup(){
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('All Systems Are a Go')
}

function draw(){
    image(video, 0, 0, 600, 500)

    fill("#FF0000")
    stroke("FF0000")

if(scoreRightWrist > 0.2){

    circle(rightWristX,rightWristY,20)

    if(rightWristX > 0 && rightWristY <=100)
    {
        document.getElementById("speed").innerHTML = "Speed = 0.5"
        song.rate(0.5)
    }
    else if(rightWristX > 100 && rightWristY <=200)
    {
        document.getElementById("speed").innerHTML = "Speed = 1"
        song.rate(1)
    }
    else if(rightWristX > 200 && rightWristY <=300)
    {
        document.getElementById("speed").innerHTML = "Speed = 1.5"
        song.rate(1.5)
    }
    else if(rightWristX > 300 && rightWristY <=400)
    {
        document.getElementById("speed").innerHTML = "Speed = 2"
        song.rate(2)
    }
    else if(rightWristX > 400 && rightWristY <=500)
    {
        document.getElementById("speed").innerHTML = "Speed = 2.5"
        song.rate(2.5)
    }
}

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX,leftWristY,20)
    InNumberleftWristY = Number(leftWristY)
    remove_decimals = floor(InNumberleftWristY)
    volume = remove_decimals/500
    document.getElementById("volume").innerHTML = "Volume = " +volume
    song.setVolume(volume)
    }
}


function play()
{
    song.play()
    song.setVolume(1)
    song.rate(1)
}

function stop(){
    song.stop()
}
