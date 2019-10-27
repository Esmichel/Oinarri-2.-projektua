var contenedor = document.querySelector ("#contenedor");
var canvas= document.querySelector ("#lienzo");
var ampli= document.querySelector ("#ampli");
var ctx= canvas.getContext("2d");
console.log("ctx",ctx);

function ampliar(){
	
	contenedor.style.width="100%";
	contenedor.style.height="100vh";
	contenedor.style.margin="0";

	lienzo.style.width="100%";
	lienzo.style.height="100vh";
	lienzo.style.backgroundSize="cover";
	lienzo.style.backgroundRepeat="no-repeat";

	ampli.innerHTML="Txikiagotu";
	ampli.style.position="fixed";
	ampli.style.top="10px";
	ampli.style.left="10px";
	ampli.style.zIndex="1";

	ampli.setAttribute("onClick", "reducir()")
}


function reducir(){
	
	contenedor.style.width = "1000px";
	contenedor.style.height = "500px";
	contenedor.style.margin = "5vh auto";

	lienzo.style.width = "1000px";
	lienzo.style.height = "500px";


	ampli.innerHTML = "Ampliatu";
	ampli.style.position = "relative";
	ampli.style.top = "0";
	ampli.style.left = "0";
	ampli.style.zIndex = "0";

	ampli.setAttribute("onClick", "ampliar()")
}

ctx.fillStyle="#e4cba0";
ctx.fillRect(0,220,1000,1000);

ctx.fillStyle="#BCBBBB";
ctx.fillRect(0,315,1000,1000);

ctx.fillStyle="white";
ctx.fillRect(0,210,1000,10);


ctx.fillStyle="#BCBBBB";
ctx.fillRect(0,350,1000,1000);

ctx.beginPath()
ctx.moveTo(40,350);
ctx.lineTo(0,450);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(80,350);
ctx.lineTo(20,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(120,350);
ctx.lineTo(60,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(160,350);
ctx.lineTo(100,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(200,350);
ctx.lineTo(140,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(240,350);
ctx.lineTo(180,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(280,350);
ctx.lineTo(220,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(320,350);
ctx.lineTo(260,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(360,350);
ctx.lineTo(300,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(400,350);
ctx.lineTo(340,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(440,350);
ctx.lineTo(380,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(480,350);
ctx.lineTo(420,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(520,350);
ctx.lineTo(460,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(560,350);
ctx.lineTo(500,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(600,350);
ctx.lineTo(540,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(640,350);
ctx.lineTo(580,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(680,350);
ctx.lineTo(620,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(720,350);
ctx.lineTo(660,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(760,350);
ctx.lineTo(700,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(800,350);
ctx.lineTo(740,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(840,350);
ctx.lineTo(780,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(880,350);
ctx.lineTo(820,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(920,350);
ctx.lineTo(860,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(960,350);
ctx.lineTo(900,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(1000,350);
ctx.lineTo(940,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(1000,450);
ctx.lineTo(980,500);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

//horizontalak

ctx.beginPath()
ctx.moveTo(0,380);
ctx.lineTo(1000,380);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(0,415);
ctx.lineTo(1000,415);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(0,450);
ctx.lineTo(1000,450);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(0,485);
ctx.lineTo(1000,485);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

//barandilliak



ctx.beginPath()
ctx.moveTo(0,290);
ctx.lineTo(1000,290);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(0,303,16,45)

ctx.beginPath()
ctx.moveTo(20,290);
ctx.lineTo(20,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(20,303);
ctx.lineTo(20,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();



ctx.beginPath()
ctx.moveTo(100,290);
ctx.lineTo(100,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(100,303);
ctx.lineTo(100,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(23,303,73,45)

ctx.beginPath()
ctx.moveTo(180,290);
ctx.lineTo(180,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(180,303);
ctx.lineTo(180,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(103,303,73,45)


ctx.beginPath()
ctx.moveTo(260,290);
ctx.lineTo(260,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(260,303);
ctx.lineTo(260,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(183,303,73,45)

ctx.beginPath()
ctx.moveTo(340,290);
ctx.lineTo(340,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(340,303);
ctx.lineTo(340,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(263,303,73,45)

ctx.beginPath()
ctx.moveTo(420,290);
ctx.lineTo(420,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(420,303);
ctx.lineTo(420,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(343,303,73,45)

ctx.beginPath()
ctx.moveTo(500,290);
ctx.lineTo(500,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(500,303);
ctx.lineTo(500,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(423,303,73,45)

ctx.beginPath()
ctx.moveTo(580,290);
ctx.lineTo(580,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(580,303);
ctx.lineTo(580,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(503,303,73,45)

ctx.beginPath()
ctx.moveTo(660,290);
ctx.lineTo(660,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(660,303);
ctx.lineTo(660,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(583,303,73,45)


ctx.beginPath()
ctx.moveTo(740,290);
ctx.lineTo(740,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(740,303);
ctx.lineTo(740,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(663,303,73,45)

ctx.beginPath()
ctx.moveTo(820,290);
ctx.lineTo(820,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(820,303);
ctx.lineTo(820,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(743,303,73,45)

ctx.beginPath()
ctx.moveTo(900,290);
ctx.lineTo(900,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(900,303);
ctx.lineTo(900,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();


ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(823,303,73,45)

ctx.beginPath()
ctx.moveTo(980,290);
ctx.lineTo(980,303);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(980,303);
ctx.lineTo(980,350);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(903,303,73,45)

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(983,303,73,45)


//bigarren solairua

ctx.fillStyle="#7d8471";
ctx.fillRect(0,185,1000,30)

ctx.fillStyle="#BCBBBB";
ctx.fillRect(0,80,1000,105)


//lurreko marrak

ctx.beginPath()
ctx.moveTo(40,80);
ctx.lineTo(0,150);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(80,80);
ctx.lineTo(20,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(120,80);
ctx.lineTo(60,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(160,80);
ctx.lineTo(100,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(200,80);
ctx.lineTo(140,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(240,80);
ctx.lineTo(180,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(280,80);
ctx.lineTo(220,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(320,80);
ctx.lineTo(260,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(360,80);
ctx.lineTo(300,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(400,80);
ctx.lineTo(340,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(440,80);
ctx.lineTo(380,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(480,80);
ctx.lineTo(420,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(520,80);
ctx.lineTo(460,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(560,80);
ctx.lineTo(500,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(600,80);
ctx.lineTo(540,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(640,80);
ctx.lineTo(580,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(680,80);
ctx.lineTo(620,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(720,80);
ctx.lineTo(660,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(760,80);
ctx.lineTo(700,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(800,80);
ctx.lineTo(740,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(840,80);
ctx.lineTo(780,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(880,80);
ctx.lineTo(820,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(920,80);
ctx.lineTo(860,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(960,80);
ctx.lineTo(900,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(1000,80);
ctx.lineTo(940,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(1000,150);
ctx.lineTo(980,185);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();


//horizontalak

ctx.beginPath()
ctx.moveTo(0,105);
ctx.lineTo(1000,105);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(0,130);
ctx.lineTo(1000,130);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(0,155);
ctx.lineTo(1000,155);
ctx.lineWidth=1;
ctx.strokeStyle="#E1E0E0"
ctx.stroke();

//bigarren barandilla

ctx.beginPath()
ctx.moveTo(0,125);
ctx.lineTo(1000,125);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(0,137,16,45)

ctx.beginPath()
ctx.moveTo(20,125);
ctx.lineTo(20,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(20,138);
ctx.lineTo(20,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();



ctx.beginPath()
ctx.moveTo(100,125);
ctx.lineTo(100,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(100,138);
ctx.lineTo(100,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="/rgba(200,229,235,.3)"
ctx.fillRect(23,137,73,45)

ctx.beginPath()
ctx.moveTo(180,125);
ctx.lineTo(180,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(180,138);
ctx.lineTo(180,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(103,137,73,45)


ctx.beginPath()
ctx.moveTo(260,125);
ctx.lineTo(260,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(260,138);
ctx.lineTo(260,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(183,137,73,45)

ctx.beginPath()
ctx.moveTo(340,125);
ctx.lineTo(340,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(340,138);
ctx.lineTo(340,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(263,137,73,45)

ctx.beginPath()
ctx.moveTo(420,125);
ctx.lineTo(420,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(420,138);
ctx.lineTo(420,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(343,137,73,45)

ctx.beginPath()
ctx.moveTo(500,125);
ctx.lineTo(500,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(500,138);
ctx.lineTo(500,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(423,137,73,45)

ctx.beginPath()
ctx.moveTo(580,125);
ctx.lineTo(580,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(580,138);
ctx.lineTo(580,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(503,137,73,45)

ctx.beginPath()
ctx.moveTo(660,125);
ctx.lineTo(660,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(660,138);
ctx.lineTo(660,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(583,137,73,45)


ctx.beginPath()
ctx.moveTo(740,125);
ctx.lineTo(740,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(740,138);
ctx.lineTo(740,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(663,137,73,45)

ctx.beginPath()
ctx.moveTo(820,125);
ctx.lineTo(820,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(820,138);
ctx.lineTo(820,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(743,137,73,45)

ctx.beginPath()
ctx.moveTo(900,125);
ctx.lineTo(900,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(900,138);
ctx.lineTo(900,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();


ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(823,137,73,45)

ctx.beginPath()
ctx.moveTo(980,125);
ctx.lineTo(980,138);
ctx.lineWidth=1;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.beginPath()
ctx.moveTo(980,138);
ctx.lineTo(980,215);
ctx.lineWidth=3;
ctx.strokeStyle="#8a9597"
ctx.stroke();

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(903,137,73,45)

ctx.fillStyle ="rgba(200,229,235,.3)"
ctx.fillRect(983,137,73,45)
