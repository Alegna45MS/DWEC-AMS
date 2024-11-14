let provincias = new Map([
    ["Andalucia",["Cádiz","Córdoba","Granada","Sevilla","Huelva","Jaen","Málaga"]],    
    ["Madrid",["Madrid Capital","Vallecas"]],
    ["Galicia",["Lugo","Orense","Pontevedra"]]
]);
let autonomias=document.getElementById("id_autonomia");
let listaProvincias=document.getElementById("id_provincia");

function crearElemento(tipo, contenido, padre) {
    // Crear el elemento del tipo especificado
    let hijo = document.createElement(tipo)
    // Indicamos el contenido
    hijo.innerHTML = contenido
    //añadir el nodo al documento
    padre.appendChild(hijo)
    return hijo
}
function añadirProvincias(autonomia){
    listaProvincias.innerHTML="";
    provincias.forEach((provincia,clave)=>{
        if(clave===autonomia){
            provincia.forEach((e)=>{
                crearElemento("option",e,listaProvincias);
            })
        }
    })
}
function añadirAutonomias(){
    crearElemento("option","Selecciona una Comunidad Autónoma",listaProvincias);
    provincias.forEach((provincia,clave)=>{
        crearElemento("option",clave,autonomias);
});
}

let cuerpo=document.body
cuerpo.addEventListener("load",añadirAutonomias());

listaProvincias.setAttribute("disables","")
autonomias.addEventListener("change",function(){
    let autonomiaSeleccionada=autonomias.value;
    añadirProvincias(autonomiaSeleccionada)
    
})
