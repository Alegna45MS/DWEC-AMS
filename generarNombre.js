const alumnos = [ "Juan", "María", "Pedro", "Ana", "Sofía", "Luis", "Miguel", "Fernando", "Valeria" ];
let listaAlumnos=[];
let setAlumnos= new Set();
let mapNombre=new Map();

function alumnoAle(alumnos){
    let num=Math.floor(Math.random() * 9);
    let alumno=alumnos[num];
    return alumno;
}
setInterval(setAlumnos.add(alumnoAle(alumnos)),2000)

