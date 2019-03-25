var canvas = document.getElementById('myCan');
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var r = 10;
var score = 0;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed  = false;
var br = 3;
var bc = 5;
var bwidth = 75;
var bheight = 20;
var bpadding = 10;
var boffsettop = 30;
var boffsetleft = 30;
//incomplete
var bricks = [];
for(var i=0;i<bc;i++)
{
    bricks[i] = [];
    for(var j=0;j<br;j++)
    {
        bricks[i][j] = {x:0,y:0};
    }
}
//unable to know whats happening
function drawBricks(){
    for(var i=0;i<bc;i++)
    {
        for(var j=0;j<br;j++)
        {
            bricks[i][j].x = 0;
            bricks[i][j].y = 0;
        }
    }
}
//incomplete

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);
function keyDownHandler(e) {
    if(e.key == "Right"||e.key == "ArrowRight") {
        rightPressed = true;
    }
    if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.key == "Right"||e.key == "ArrowRight") {
        rightPressed = false;
    }
    if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
function drawBall()
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2,false);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.closePath();
}

function draw() {  
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if(x+dx>canvas.width-r||x+dx<r)
        dx=-dx;
    if(y+dy<r)
        dy=-dy;
    else if(y+dy>canvas.height-r){
        if(x>paddleX&&x<paddleX+paddleWidth) {
            dy = -dy;
            score+=10;
        }
        else{
            alert(`Game OVER with the Score of:   ${score}`);
            document.location.reload();
            clearInterval(interval);
        }
    }
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 10;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 10;
    }
    x+=dx*2;
    y+=dy*2;
    requestAnimationFrame(draw);
}
var interval = requestAnimationFrame(draw);
// ctx.beginPath();
// ctx.rect(20,40,50,50);
// ctx.rect(72,40,50,50);
// ctx.fillStyle = "blue";
// ctx.fill();
// ctx.closePath();
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, true);
// ctx.arc(240, 300, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();
// // ctx.beginPath();
// // ctx.rect(122,40,50,50);
// // ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// // ctx.stroke();
// // ctx.closePath();