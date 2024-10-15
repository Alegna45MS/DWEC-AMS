const alumnos = [ "Juan", "María", "Pedro", "Ana", "Sofía", "Luis", "Miguel", "Fernando", "Valeria" ];

let listaAlumnos= new Set();
let contNombre=new Map();

function alumnoAle(alumnos){
    let num=Math.floor(Math.random() * 9)
    let alumno=alumnos[num]
    return alumno
}
setInterval(listaAlumnos.add(alumnoAle(alumnos)),2000)
console.log(listaAlumnos)
