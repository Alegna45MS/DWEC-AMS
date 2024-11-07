        const autores = [
            new Set(["Juan Rulfo", "Pedro Páramo", "2014"]),
            new Set(["Juan Rulfo", "El Llano en Llamas", "2013"]),
            new Set(["Rosa Montero", "Cuentos verdaderos", "2024"]),
            new Set(["Pablo Neruda", "Veinte poemas de amor y una canción desesperada", "2013"]),
            new Set(["Almudena Grandes", "La madre de Frankenstein", "2020"]),
            new Set(["Miguel de Cervantes Saavedra", "Don Quijote de la Mancha", "1605"]),
            new Set(["Jorge Luis Borges", "Ficciones", "2014"]),
            new Set(["Rosa Chacel", "Memorias de Leticia Valle", "1945"]),
            new Set(["Pablo Neruda", "Antología poética", "2014"]),
            new Set(["Rosa Chacel", "Saturnal", "1972"]),
            new Set(["Carmen Laforet", "La Isla de los Demonios", "1952"]),
            new Set(["Jorge Luis Borges", "El sur", "1953"]),
            new Set(["Pablo Neruda", "Confieso que he vivido", "2010"])
        ];

        let select = document.getElementById("idAutores");
        let table = document.querySelector("table");

        function añadirOption(valor) {
            let option = document.createElement("option");
            option.value = valor;
            option.innerHTML = valor;
            select.appendChild(option);
        }

        function actualizarTabla(autor) {
            limpiarTabla();
            autores.forEach((item) => {
                const [autorItem, titulo, fecha] = item; // Desestructurar los valores del Set
                if (autorItem === autor) {
                    let fila = document.createElement("tr");
                    let tituloCelda = document.createElement("td");
                    let fechaCelda = document.createElement("td");

                    tituloCelda.innerText = titulo;
                    fechaCelda.innerText = fecha;

                    fila.appendChild(tituloCelda);
                    fila.appendChild(fechaCelda);
                    table.appendChild(fila);
                }
            });
        }

        function limpiarTabla() {
            // Mantiene la cabecera de la tabla y elimina las filas de datos
            let filas = table.querySelectorAll("tr");
            filas.forEach((fila, index) => {
                if (index > 0) { // índice 0 es la cabecera
                    fila.remove();
                }
            });
        }

        // Crear un Set para autores únicos y añadir las opciones al select
        let autoresUnicos = new Set();
        autores.forEach((item) => {
            const [autor] = item; // Extraer el autor de cada Set
            autoresUnicos.add(autor);
        });

        autoresUnicos.forEach((autor) => {
            añadirOption(autor);
        });

        select.addEventListener("change", function () {
            let autorSeleccionado = select.value;
            if (autorSeleccionado !== "seleccione-autor") {
                actualizarTabla(autorSeleccionado);
            }
        });

