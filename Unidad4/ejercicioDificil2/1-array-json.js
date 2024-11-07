let autores=[
    {"Autor": "Carmen Laforet", "Titulo": "Nada", "Fecha": "1945"},
    {"Autor": "Juan Rulfo", "Titulo": "Pedro Páramo", "Fecha": "2014"},
    {"Autor": "Juan Rulfo", "Titulo": "El Llano en Llamas", "Fecha": "2013"},
    {"Autor": "Rosa Montero", "Titulo": "Cuentos verdaderos", "Fecha": "2024"},
    {"Autor": "Pablo Neruda", "Titulo": "Veinte poemas de amor y una canción desesperada", "Fecha": "2013"},
    {"Autor": "Almudena Grandes", "Titulo": "La madre de Frankenstein", "Fecha": "2020"},
    {"Autor": "Miguel de Cervantes Saavedra", "Titulo": "Don Quijote de la Mancha", "Fecha": "1605"},
    {"Autor": "Jorge Luis Borges", "Titulo": "Ficciones", "Fecha": "2014"},
    {"Autor": "Rosa Chacel", "Titulo": "Memorias de Leticia Valle", "Fecha": "1945"},
    {"Autor": "Pablo Neruda", "Titulo": "Antología poética", "Fecha": "2014"},
    {"Autor": "Rosa Chacel", "Titulo": "Saturnal", "Fecha": "1972"},
    {"Autor": "Carmen Laforet", "Titulo": "La Isla de los Demonios", "Fecha": "1952"},
    {"Autor": "Jorge Luis Borges", "Titulo": "El sur", "Fecha": "1953"},
    {"Autor": "Pablo Neruda", "Titulo": "Confieso que he vivido", "Fecha": "2010"}
]

let select=document.getElementById("idAutores");
let table = document.querySelector("table");

function añadirOption(valor){
    let option=document.createElement("option")
    option.value=valor;
    option.innerHTML=valor;
    select.appendChild(option);
}
function actualizarTabla(autor){
    limpiarTabla();
    autores.forEach((item) => {
        if (item["Autor"] === autor) {
            let fila = document.createElement("tr");
            let titulo = document.createElement("td");
            let fecha = document.createElement("td");

            titulo.innerText = item["Titulo"];
            fecha.innerText = item["Fecha"];

            table.appendChild(fila);
            fila.appendChild(titulo);
            fila.appendChild(fecha);
        }
    });
}
function limpiarTabla(){
    // Mantiene la cabecera de la tabla y elimina las filas de datos
    let filas = table.querySelectorAll("tr");
    filas.forEach((fila, index) => {
        if (index > 0) { // índice 0 es la cabecera
            fila.remove();
        }
    });
}
    // Usar un Set
    let autoresUnicos = new Set();
    autores.forEach((autor) => {
        autoresUnicos.add(autor["Autor"]);
    });

    autoresUnicos.forEach((autor) => {
        añadirOption(autor);
    });

    select.addEventListener("change", function() {
        let autorSeleccionado = select.value;
        if (autorSeleccionado !== "seleccione-autor") {
            actualizarTabla(autorSeleccionado);
        }
    });


