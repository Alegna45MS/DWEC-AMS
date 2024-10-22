function crearElementos(tipo,contenido,padre){
    /*Crear etiqueta*/
    let hijo=document.createElement(tipo)
    /*En la etiqueta,meter contenido*/
    hijo.innerHTML=contenido;
    /*Añadir al body*/
    padre.appendChild(hijo);
}

crearElementos("h1","MIS AFICIONES",document.body)
crearElementos("p","¿Mi deporte favorito?",document.body)
crearElementos("p","¿Mi serie favorito?",document.body)
crearElementos("p","¿Mi pelicula favorito?",document.body)


