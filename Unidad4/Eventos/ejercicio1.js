let boton=document.getElementById("idBoton");
let cuerpo=document.body;
function numAleColor() {
    let num = Math.floor(Math.random() * 255);
    return num;
}
function cambiarColor() {
    let rojo = numAleColor();
    let verde = numAleColor();
    let azul = numAleColor();
    cuerpo.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}


