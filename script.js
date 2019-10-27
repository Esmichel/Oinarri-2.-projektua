
/var frame = window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame;

var Xposizioa =0;
var numero = 0;
var sprite =new Image();
sprite.src= "personaje2.png";
var canvas= document.querySelector ("#lienzo");
var ctx= canvas.getContext("2d");
console.log("ctx",ctx);





function tiempo(){

if (numero >= 888){numero = 0}else{numero+=24}

for(var i = 0; i <= numero; i+=111){

	if(numero >= i){Xposizioa = i}
}

ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.drawImage(sprite,Xposizioa, 0, 110, 133, 0 , 280, 80, 100);

frame(tiempo)

}

tiempo()
/