let boton=document.createElement("button")
boton.innerHTML="Insertar Aleatorio";
document.body.append(boton)

boton.addEventListener("click",function(){
    crearAleatorio()
})
function numAle() {
    let num=Math.random()*1
    return num
}
function crearAleatorio(){
    let elemento=document.createElement("ul")
    elemento.innerHTML=`Nuevo elemento:${numAle()}`
    document.body.append(elemento)
}
