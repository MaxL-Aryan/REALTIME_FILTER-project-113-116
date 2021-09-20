function preload()
{

}

function setup()
{
canvas=createCanvas(320,300);
canvas.position(525,280);
video=createCapture(VIDEO);
    video.hide();
    tint_colour="";
}

function draw()
{
image(video,0,0,320,300);
tint(tint_colour);
}

function take_snapshot()
{
    save('aryans_jadu.png');
}

function filter_colour()
{
    tint_colour=document.getElementById("filter_colour").value;
}