let alumnos=[]
let alumno=new Map()
let persona
let nombreNota

for(let i=0;i<3;i++){
    persona=prompt("Escribe el nombre y nota final del alumno separado por coma")
    nombreNota=persona.split(",")
    alumno.set('nombre',nombreNota[0])
    alumno.set('nota',nombreNota[1])
}
