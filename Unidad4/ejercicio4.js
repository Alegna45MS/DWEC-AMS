function crearElementos(tipo,contenido,padre){
    /*Crear etiqueta*/
    let hijo=document.createElement(tipo)
    /*En la etiqueta,meter contenido*/
    hijo.innerHTML=contenido;
    /*Añadir al body*/
    padre.appendChild(hijo);
    return hijo
}

let valorDeporte=deporte.value;
let elemento1=crearElemento("p", deporte.value, document.getElementById("deportes"));
elemento1.classList.add("rojo")

let valorSerie=serie.value;

let valorPelicula=pelicula.value;

/*let p1=document.createElement("p")
p1.innerHTML=valorDeporte
document.body.appendChild(p1)*/

boton.addEventListener("click",function(){
    
})
