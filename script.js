
var canvasWidth=1000;
var canvasHeight=500;
var x=0;
var y=0
var srcX;
var srcY;
var sheetWidth=864;
var sheetHeight=280;
var cols= 8;
var rows=2;
var width= sheetWidth/cols;
var height= sheetHeight/rows;

var currentFrame= 0;
var character= new Image();
character.src = "character.png"

var canvas= document.querySelector("this.canvas");
canvas.width=canWidth;
canvas.height=canHeight;
var ctx = canvas.getContext ("2d");

function updateFrame(){

currentFrame= ++currentFame % cols;
srcX = currentFrame*width;
srcY=0;
}

function drawImage(){

	updateFrame();
	ctx.drawImage(character,srcX, srcY, width , height , x , y, width , height)

}	

setInterval(function(){
	drawImage();
},100);
