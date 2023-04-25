var idTemporal=1;
var numeroDeImagenes;
function activarMiCarrusel(carrusel, segundos){
    numeroDeImagenes=document.getElementById(carrusel).children("img").length;
    var intervalo = setInterval (hola, segundos); 
    
}


function hola(){
    document.getElementById("imagen"+idTemporal).style = "display: none";    
    if(numeroDeImagenes==idTemporal){
        idTemporal=1;
    } else{
        idTemporal++;
    }
    document.getElementById("imagen"+idTemporal).style = "display: block"; 
}