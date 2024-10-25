let elemento = "";
let arrayElementos=[];
let arrayOrdenada=[];
let producto = document.getElementById("producto");
let contenedor=document.getElementById("contenedor");

function crearElemento(tipo, contenido, padre) {
  // Crear el elemento del tipo especificado
  let hijo = document.createElement(tipo);
  // Indicamos el contenido
  hijo.innerHTML = contenido;
  // Añadir el nodo al documento
  padre.appendChild(hijo);
  return hijo;
}



document.getElementById("añadir").addEventListener("click", () => {
    contenedor.innerHTML="";
    arrayElementos.push(producto.value);
    arrayOrdenada=arrayElementos.sort();
    arrayOrdenada.forEach(function(i){
        elemento = crearElemento("li",i,document.getElementById("contenedor"));
        producto.value = "";
    })
});

/*let elemento = "";
let arrayElementos = [];
let arrayOrdenada = [];
let producto = document.getElementById("producto");
let contenedor = document.getElementById("contenedor");

function crearElemento(tipo, contenido, padre) {
  // Crear el elemento del tipo especificado
  let hijo = document.createElement(tipo);
  // Indicamos el contenido
  hijo.innerHTML = contenido;
  
  // Añadir evento para eliminar el elemento al hacer clic
  hijo.addEventListener("click", () => {
    // Eliminar del array de elementos
    arrayElementos = arrayElementos.filter(item => item !== contenido);
    // Actualizar la lista
    actualizarLista();
  });
  
  // Añadir el nodo al documento
  padre.appendChild(hijo);
  return hijo;
}

function actualizarLista() {
  contenedor.innerHTML = "";
  arrayOrdenada = arrayElementos.sort();
  arrayOrdenada.forEach(function(i) {
    crearElemento("li", i, contenedor);
  });
}

document.getElementById("añadir").addEventListener("click", () => {
  if (producto.value !== "") { // Validar que el input no esté vacío
    arrayElementos.push(producto.value.trim());
    producto.value = "";
    actualizarLista(); // Actualizar la lista en pantalla
  }
});*/
