statuss = "";

function setup()
{
    canvas = createCanvas(480, 360);
    canvas.center();
    video = createCapture();
    video.hide();
    video.center();
}

function start()
{
    objectdetect = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_value = document.getElementById("input").value; 
}

function modelLoaded()
{
    console.log("Model Loaded!");
    statuss = true;
}

function draw()
{
    image(video, 0, 0, 480, 360);
}