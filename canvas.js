var contenedor = document.querySelector ("#contenedor"); 
var canvas= document.querySelector ("#canvas"); 
var ampli= document.querySelector ("#ampli"); 
var ctx= canvas.getContext("2d"); 
console.log("ctx",ctx); 
 
function ampliar(){ 
     
    contenedor.style.width="100%"; 
    contenedor.style.height="100vh"; 
    contenedor.style.margin="0"; 
 
    canvas.style.width="100%"; 
    canvas.style.height="100vh"; 
    canvas.style.backgroundSize="cover"; 
    canvas.style.backgroundRepeat="no-repeat"; 
 
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