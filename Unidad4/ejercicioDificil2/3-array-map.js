const autores = [
    new Map([
        ["autor", "Juan Rulfo"],
        ["titulo", "Pedro Páramo"],
        ["año", "2014"]
    ]),
    new Map([
        ["autor", "Juan Rulfo"],
        ["titulo", "El Llano en Llamas"],
        ["año", "2013"]
    ]),
    new Map([
        ["autor", "Rosa Montero"],
        ["titulo", "Cuentos verdaderos"],
        ["año", "2024"]
    ]),
    new Map([
        ["autor", "Pablo Neruda"],
        ["titulo", "Veinte poemas de amor y una canción desesperada"],
        ["año", "2013"]
    ]),
    new Map([
        ["autor", "Almudena Grandes"],
        ["titulo", "La madre de Frankenstein"],
        ["año", "2020"]
    ]),
    new Map([
        ["autor", "Miguel de Cervantes Saavedra"],
        ["titulo", "Don Quijote de la Mancha"],
        ["año", "1605"]
    ]),
    new Map([
        ["autor", "Jorge Luis Borges"],
        ["titulo", "Ficciones"],
        ["año", "2014"]
    ]),
    new Map([
        ["autor", "Rosa Chacel"],
        ["titulo", "Memorias de Leticia Valle"],
        ["año", "1945"]
    ]),
    new Map([
        ["autor", "Pablo Neruda"],
        ["titulo", "Antología poética"],
        ["año", "2014"]
    ]),
    new Map([
        ["autor", "Rosa Chacel"],
        ["titulo", "Saturnal"],
        ["año", "1972"]
    ]),
    new Map([
        ["autor", "Carmen Laforet"],
        ["titulo", "La Isla de los Demonios"],
        ["año", "1952"]
    ]),
    new Map([
        ["autor", "Jorge Luis Borges"],
        ["titulo", "El sur"],
        ["año", "1953"]
    ]),
    new Map([
        ["autor", "Pablo Neruda"],
        ["titulo", "Confieso que he vivido"],
        ["año", "2010"]
    ])
];

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
        if (item.get("autor") === autor) {
            let fila = document.createElement("tr");
            let titulo = document.createElement("td");
            let fecha = document.createElement("td");

            titulo.innerText = item.get("titulo");
            fecha.innerText = item.get("fecha");

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
        autoresUnicos.add(autor.get("autor"));
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

