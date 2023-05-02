var idTemporal=0;
var numeroDeImagenes;
var variableCarrusel;
function activarMiCarrusel(carrusel, segundos){
    variableCarrusel=carrusel
    console.log("hola q tal")
    numeroDeImagenes=$("#"+carrusel).children("img").length;
    // numeroDeImagenes=document.getElementById(carrusel).children("img").length;
    var intervalo = setInterval (hola, segundos); 
    $("#"+variableCarrusel).children("img")[0].style = "display: block";

}



function hola(){
    
    console.log($("#"+variableCarrusel).children("img")[0])
    $("#"+variableCarrusel).children("img")[idTemporal].style = "display: none";    
    if(numeroDeImagenes-1==idTemporal){
        idTemporal=0;
    } else{
        idTemporal++;
    }
    $("#"+variableCarrusel).children("img")[idTemporal].style = "display: block"; 
}