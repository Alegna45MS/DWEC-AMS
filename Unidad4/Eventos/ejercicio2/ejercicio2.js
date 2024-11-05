let cuerpoPagina = document;
let posX=document.getElementById("posX");
let posY=document.getElementById("posY");

cuerpoPagina.addEventListener("mousemove",coordenadas)

function coordenadas(evento){
    let x=evento.clientX;
    let y=evento.clientY;

    posX.innerHTML=`Posicion X: ${x}`;
    posY.innerHTML=`Posicion Y: ${y}`;
}