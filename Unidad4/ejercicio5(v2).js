let productosMap = new Map([
    ['pepino', 60],
    ['tomates', 55],
    ['cebollas', 50],
    ['manzana', 30],
    ['platano', 10],
  ]); //clave:producto valor:precio
  
let precioTotal=0;
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